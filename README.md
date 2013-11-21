Spring_Angular_Framework_Setting
================================

Eclipse Setting file with Spring and AngularJS Framework

With the update to 0.0.1
* Yeoman Generator of AngularJS [generator-angularjs](https://github.com/yeoman/generator-angular)
* Spring MVC + Maven Environment
* for Mac Environment


Pre-Install
-----------

* Eclipse Juno
* Maven


Install
-------

*  $ git clone [git@github.com:ysyun/SPA_Angular_SpringFramework_Eclipse_ENV.git](git@github.com:ysyun/SPA_Angular_SpringFramework_Eclipse_ENV.git)
*  $ cd SPA_Angular_SpringFramework_Eclipse_ENV
*  $ npm install .
*  $ grunt build  (create the public folder which is distributed)
*  $ mvn clean install (create <ProjectName>.war distributed final file)


Post-Install
------------

* "Import..." in Eclipse -> "Maven / Existing Maven Projects" and then you select the pom.xml of this cloned project -> Building workspace.
* Set "Add Maven Dependencies of Deployment Assembly" in the window of the project properties. 
* Set Test Server about Tomcat7


Advanced Examples
-----------------
*  [Blog about this usage](http://mobicon.tistory.com/380)


Branch Dependencies
-------------------
feature_angular_post
  <- feature_mybatis
       <- feature_mybatis_mapper
            <- feature_windows_ie8
                 <- develop
                      <- master

final branch is master


Author
------
writtend by [Yun YoungSik](http://ysyun.github.io). My Blog is [Mobile Convergence](http://mobicon.tistory.com)

Copyleft(c) 2013 All rights reserved by MobiconSoft


LICENSE
-------
MIT License. Everybody can use this project and commercial.
