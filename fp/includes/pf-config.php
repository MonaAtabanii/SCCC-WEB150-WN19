<?php
/*
pf-config.php

Used to store all of our Final Project configuration information

*/

//echo basename($_SERVER['PHP_SELF']);

define('THIS_PAGE',basename($_SERVER['PHP_SELF']));

//echo THIS_PAGE;

//die;

switch(THIS_PAGE) {
    
    case 'index.php':
        $title = "Multi Activites Co. Ltd.";
        $logo = 'fa-home';
        $PageID = 'Welcome';
    break;
        
    case 'aboutus.php':
        $title = "About KMA";
        $logo = 'fa-home';
        $PageID = 'About KMA';
    break;
        
    case 'products.php':
        $title = "Products List";
        $logo = 'fa-home';
        $PageID = 'Products List';
    break;
        
    case 'contactus.php':
        $title = "Contact us";
        $logo = 'fa-pencil-square-o';
        $PageID = 'Contact us';
    break;
    
   /*case 'a herf="../index.php"':
        $title = "Portal Page";
        $logo = 'fa-home';
        $PageID = 'Welcome';
    break;*/
        
   
        
    default:
        $title = THIS_PAGE;
        $logo = 'fa-home';
        $PageID = 'Welcome';
}

$nav['index.php'] = "Home";
$nav['aboutus.php'] = "About us";
$nav['products.php'] = "Products";
$nav['contactus.php'] = "Contact us";
/*$nav['a herf="../index.php"'] = "Portal Page";*/


/*Here we're creating a function to generate links and keep the highlight on the current page



<li><a href="index.php" class="selected">Welcome</a></li>
      <li><a href="big/index.php">Big</a></li>
      <li><a href="aia.php">AIA</a></li>
      <li><a href="flowchart.php">Flowchart</a></li>
      <li><a href="fp/index.php">Final Project</a></li>
      <li><a href="contactme.php">Contact Andrew</a></li>
      
*/


function makeLinks($nav)
{
    $myReturn = '';
    foreach($nav as $url => $text){
        
        if($url == THIS_PAGE){
           $myReturn .= "<li><a class=\"selected\" href=\"$url\">$text</a></li>"; 
        }else{
            $myReturn .= "<li><a href=\"$url\">$text</a></li>";
        }
        
        
        
        
    }
    
    return $myReturn;
}


?>







