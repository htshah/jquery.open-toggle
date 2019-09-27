# jquery.click-toggle
A lightweight library to make sure that only one element has **.open** or any other user-defined class in the document at a time. It adds **.open** or any other user-defined class-name to the *click-toggle element* which is clicked and removes **.open** from the remaining *click-toggle elements*. Clicking on any other elements in the document will lead to no **.open** class to any of the *click-toggle elements*.

## Installation
1. Download the JS file for the plugin.
2. Add the script tag in the HTML Page.

    ```html
        <script type="text/javascript" src="/path/to/jquery.click-toggle.min.js"></script>
    ```

## Usage
```html
<html>
<body>
    <!-- Any one of these element will have 'open' class at a time if clicked on it -->
    <div class='my-click-toggle'></div>
    <div class='my-click-toggle open'></div>
    <div class='my-click-toggle'></div>
    
    <!-- Custom open class -->
    <!-- Any one of these element will have 'open' class at a time if clicked on it -->
    <div class='my-click-toggle-custom'></div>
    <div class='my-click-toggle-custom custom-open-class'></div>
    <div class='my-click-toggle-custom'></div>

    <!--  
        Clicking on any other elements in the document will lead to 
        removal of '.open' or user-defined class from all of the click-toggle elements 
    -->

    <script type="text/javascript" src="/path/to/jquery.click-toggle.min.js"></script>
    <script>
        $('.my-click-toggle').clickToggle();

        // Or with custom open class
        $('.my-click-toggle-custom').clickToggle('custom-open-class');
    </script>
</body>
</html>
```
