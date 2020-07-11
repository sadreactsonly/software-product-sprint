// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomProject() {
  const Projects =
      ['Porject Title - Big Integer for c++ \nShort Description\nBuilt a c++ Library to handle integers greater than 64 bit.'
	  , 'Porject Title - Text encryptor/decryptor \nShort Description\nBuilt a text encryptor/decryptor program using basic ciphers like vigenere cipher and rail fence cipher.'
      , 'Porject Title - Java memory consumption monitor \nShort Description\nBuild a JAVA plugin to monitor the memory consumption of various SWF Activities in JVM'];

  // Pick a random greeting.
  const Project = Projects[Math.floor(Math.random() * Projects.length)];

  // Add it to the page.
  const ProjectContainer = document.getElementById('Project-container');
  ProjectContainer.innerText = Project;
}
