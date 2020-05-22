# Elemental-API-Control

Simple WebPage to Control both the ELemental & Unifies Streaming APIs.

Use Javascript Fetch to call pre-coded PHP Script for Each Channel whcih execs a ServerSide Shell Script (call auth_helper.rb to generate and pass the API Token).  As everythign is precoded pre channel there is no paramater passing between JS .. PHP or shell.

Each script has a name which indicates the API task it should exectua and a suffix (ie) "-CHANNEL1" which indicates the channel it should execut for.

The channel ID values are held in xml files which are use in API Port Requests.

The USP APIs a are all read only.  with the excpetion of purge ...

https://pl-usp-live-01.rte.host/live/a/channel5/channel5.isml?t=0

For exampel will purge the entire archive...

Todo ...extend to return the Video storage available on each node too.
