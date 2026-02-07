import Map "mo:core/Map";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Nat64 "mo:core/Nat64";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type ContactForm = {
    fullName : Text;
    email : Text;
    company : Text;
    phone : ?Text;
    message : Text;
  };

  module ContactForm {
    public func compare(form1 : ContactForm, form2 : ContactForm) : Order.Order {
      Text.compare(form1.fullName, form2.fullName);
    };
  };

  type Id = Nat;

  type Submission = {
    id : Id;
    timestamp : Time.Time;
    form : ContactForm;
    submittedBy : Principal;
  };

  module Submission {
    public func compare(submission1 : Submission, submission2 : Submission) : Order.Order {
      Nat.compare(submission1.id, submission2.id);
    };
  };

  let submissions = Map.empty<Id, Submission>();
  var nextSubmissionId : Id = 0;
  let submissionCooldownMillis : Nat64 = 60 * 1_000_000_000; // 60 seconds
  let lastSubmissionTimes = Map.empty<Principal, Time.Time>();

  public shared ({ caller }) func submitContact(form : ContactForm) : async () {
    let now = Time.now();
    let lastTime = switch (lastSubmissionTimes.get(caller)) {
      case (?time) { time };
      case (null) { 0 };
    };

    let timeSinceLastSubmission = now - lastTime;
    if (timeSinceLastSubmission > 0) {
      let natTimeSinceLastSubmission = Nat64.fromNat(Int.abs(timeSinceLastSubmission));
      if (natTimeSinceLastSubmission < submissionCooldownMillis) {
        Runtime.trap("Please wait before submitting again.");
      };
    };

    let submission : Submission = {
      id = nextSubmissionId;
      timestamp = now;
      form;
      submittedBy = caller;
    };
    submissions.add(nextSubmissionId, submission);
    lastSubmissionTimes.add(caller, now);

    nextSubmissionId += 1;
  };

  public query ({ caller }) func getContactSubmission(id : Id) : async Submission {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can access submissions.");
    };

    switch (submissions.get(id)) {
      case (null) { Runtime.trap("Submission not found") };
      case (?submission) { submission };
    };
  };

  public query ({ caller }) func getAllContactSubmissions() : async [Submission] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can access submissions.");
    };

    submissions.values().toArray().sort();
  };

  public query ({ caller }) func getContactSubmissionCount() : async Nat {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can access submission statistics.");
    };

    submissions.size();
  };
};
