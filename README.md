# Chrome extension to show Weather Report 

* [Getting Started](#getting-started)
* [Installation](#installation)
* [Usage](#usage)

## Getting Started

This package has been made to quickly get yourself up and running with making a new Google Chrome extension.  The basic structure of this package is as follows:

    - css/
    - img/
        -- icon16.png
        -- icon48.png
        -- icon128.png
	- js/
		-- jquery-2.0.3.min
    - manifest.json
	- popup.html
	- README.md
	
### Installation

- Please either clone this repository or download as a ZIP file.
- Extract the contents into your preferred working directory.
- Open your Google Chrome browser.
- Enter `chrome://extensions/` into the address bar.
- Ensure "Developer Mode" is ticked/enabled in the top right.
- Click on "Load unpacked extension...".
- Navigate to your extracted directory, and click "OK".
- Your basic extension template should now be alongside your address bar, showing the Google Chrome logo.

## Usage

This package is standalone.  Please visit the Google Developer documentation if you wish to know more about Extension creating:

http://developer.chrome.com/extensions/getstarted.html

### Files to edit

The main files you will need to edit are:

> manifest.json

- This contains all of your extension information.
- As an example, the storage permission has been added.
- The default popup window for this extension is called `popup.html`.
- Google Analytics tracking requirement has also been added.

> popup.html

- Contains the basic HTML boilerplate, edit at your will.
- A standard (non-responsive) navbar is enabled.
- The main content area is wrapped inside `section`.
