# jquery.open-toggle

**open-toggle** is a _jQuery_ plugin that makes sure that only one element has (user-defined)open class at a time amongst the selected elements.

## [Demo](https://jquery-open-toggle.netlify.com/)

## Installation

1. Download the JS file for the plugin.
2. Add the script tag in the HTML Page.

   ```html
   <script
     type="text/javascript"
     src="/path/to/jquery.open-toggle.min.js"
   ></script>
   ```

## Usage

```html
<html>
  <body>
    <!-- Any one of these element will have 'open' class at a time if clicked on it -->
    <div class="my-open-toggle"></div>
    <div class="my-open-toggle"></div>
    <div class="my-open-toggle"></div>

    <!--  
        Clicking on any other elements in the document will lead to 
        removal of '.open' or user-defined class from all of the open-toggle elements 
    -->

    <script
      type="text/javascript"
      src="/path/to/jquery.open-toggle.min.js"
    ></script>
    <script>
      $(".my-open-toggle").openToggle();

      // Or with custom open class
      $(".my-open-toggle-custom").openToggle("custom-open-class");
    </script>
  </body>
</html>
```
