angular.module('lmsApp')
.controller( 'addForumCtrl', ['$scope', 'Forum', 'Announcement', 'Events', function($scope, Forum, Announcement, Events) {

  $scope.theForum = Forum.getForum();
  $scope.theAnnounce = Announcement.getAncmnt();
  $scope.theEvents = Events.getEvents();

  $scope.addForum = function(forum){


    forum.timePosted = Math.floor(Date.now() / 1000);
    Forum.addForum(forum);


    $scope.forum = {titles:'', contents:''};

    // $scope.form_group.$setPristine;

  }

  // $scope.theAnnounce = Announcement.getAncmnt();





}])
