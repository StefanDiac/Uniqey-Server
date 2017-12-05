# Uniqey-Server

TL;DR Description - An API that can generate random UIDs, that uses Dropbox's API.

Description

This is an API that uses Dropbox's API in order to create unique identification numbers. The entire process is composed of three steps.

The users must sign into a valid Dropbox account. The entire process is handled by the Dropbox API.

The users will have to select a path, in their dropbox folder, from which the document type categories will be found. They also have the option of creating such a folder if none is present. This is necessary for the third and final step, which will pull the document names, as UID categories.

Example - John has in his Categories folder three documents - "Taxes Form", "Billing Form", "Address Form". The API will get the document names, and place them in a drop down menu for the third and final step.

Finally, the users will be able to select a category, and proceed to generate a random unique number, for the document's identification. All that is left is clicking the Generate number.

The users can view all the numbers that they have generated, by clicking the view button. This will connect to the database, and query it for all the unique numbers created by the user, based on their dropbox ID.
