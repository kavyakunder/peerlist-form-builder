### Form Builder

A dynamic form builder built with Next.js, TailwindCSS, and TypeScript for creating, previewing, and submitting customizable forms.

## Features
1. **Create Custom Forms**: Add various question types, including Short Answer, Long Answer, Single Select, Number, and URL.

2. **Change Question Type**: Modify the question type after adding it to the form.

3. **Form Preview**: Preview the form before submission to ensure everything is in place.

4. **Form Completion Tracker**: Displays the percentage of fields filled as users complete the form.

5. **Fill the Form**: After previewing, users can fill out the form, giving them a clear idea of how it will function when submitted.

6. **Form History**: View previously submitted forms in a table.


## Assumptions
1. The dropdown for selecting option type is implemented as a popup to enhance user experience and interaction.

2. Users cannot proceed to preview unless all the questions are filled. 

3. For the purpose of this project, I saved the form data locally in the browser (using local storage) instead of integrating a backend.



## Tech Stack
- Next.js: A powerful React framework used to build the app.
- TailwindCSS: A utility-first CSS framework that allowed me to quickly style the app.
- TypeScript (or JavaScript): Used for type safety and modern JavaScript features.
- Local Storage: For saving and retrieving form data within the app (for simplicity and demo purposes).