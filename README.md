# jquery.open-toggle
A lightweight library to make sure that only one element has **.open** or any other user-defined class in the document at a time. It adds **.open** or any other user-defined class-name to the *open-toggle element* which is clicked and removes **.open** from the remaining *open-toggle elements*. Clicking on any other elements in the document will lead to no **.open** class to any of the *open-toggle elements*.

## Installation
1. Download the JS file for the plugin.
2. Add the script tag in the HTML Page.

    ```html
        <script type="text/javascript" src="/path/to/jquery.open-toggle.min.js"></script>
    ```

## Usage
```html
<html>
<body>
    <!-- Any one of these element will have 'open' class at a time if clicked on it -->
    <div class='my-open-toggle'></div>
    <div class='my-open-toggle'></div>
    <div class='my-open-toggle'></div>

    <!--  
        Clicking on any other elements in the document will lead to 
        removal of '.open' or user-defined class from all of the open-toggle elements 
    -->

    <script type="text/javascript" src="/path/to/jquery.open-toggle.min.js"></script>
    <script>
        $('.my-open-toggle').clickToggle();

        // Or with custom open class
        $('.my-open-toggle-custom').clickToggle('custom-open-class');
    </script>
</body>
</html>
```
