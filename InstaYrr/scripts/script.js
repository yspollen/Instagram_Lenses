/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// Load in the required modules
const Diagnostics = require('Diagnostics');
const NativeUI = require('NativeUI');
const Scene = require('Scene');
const TouchGestures = require('TouchGestures');

// Create a variable to store the name of our text object
const input  = 'input';

// Access the text object in our scene
const inputtext = Scene.root.find(input);
// Register a tap gesture on the text node
TouchGestures.onTap(inputtext).subscribe(function() {
	// Edit the text through the NativeUI module
	NativeUI.enterTextEditMode(input);
});

// Subscribe to changes in the text
NativeUI.getText(input).monitor().subscribe(function(textUpdate){
  // Log the new text value to the console
  var newValue = textUpdate.newValue;
  Diagnostics.log('You entered ' + newValue);
  //if (newValue.length < 600){
  	NativeUI.setText(input, newValue + newValue.substring(newValue.length - 1, newValue.length));
  //}
});