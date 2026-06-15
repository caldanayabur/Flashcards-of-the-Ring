# Web Development Project 2 - Flashcards of the Ring

Submitted by: Carolina Aldana

This web app: **A Lord of the Rings–themed flashcard app with 10 trivia cards covering characters, artifacts, and places. Click a card to flip it and reveal the answer, then click again to flip it back. Use the button to jump to a random next card.**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contain images in addition to or in place of text
  - [x] Some or all cards have images in place of or in addition to text
- [x] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

The following **additional** features are implemented:

* [x] List anything else that you added to improve the site's functionality!

As part of the optional features, I included 18 images throughout the flashcards and added the following categories:

- characters (purple) — Gollum, Frodo, Legolas, Gandalf, Arwen
- artifacts (gold) — Aragorn's sword, Elven Rings, Pippin's song
- places (green) — One Ring destroyed, The Shire

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
Video created with Clipchamp.  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

The back of the card was showing the image off to the left instead of centered, and the answer text was overlapping the image.

The issue was that the image had a fixed width and an aspect ratio set at the same time. The browser used the width to calculate a height, but that calculated height was bigger than the space available inside the card. The image overflowed into the text below it, making them overlap.

The centering problem happened for a similar reason: the image was already as wide as its container, so telling it to "center itself" had no effect.

The fix was to give the back card image an explicit height so the browser did not need to calculate one from the aspect ratio. That kept the image inside its space and let the text sit cleanly below it.

## License

    Copyright [2026] [Carolina Aldana]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.