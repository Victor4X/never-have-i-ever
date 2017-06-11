<?php
  $pathToRoot = "../";
  $pathToHtdocs = "./";

  require_once($pathToRoot."includes/core.php");
  require_once($pathToRoot."includes/head.php");
?>
  <title><?php echo $mainTitle.""; ?></title>
</head>
<?php require_once($pathToRoot."includes/header.php"); ?>
  <div class="container">
    <div id="choosePack">
      <p>Vælg en pakke at spille.</p>
    </div>
    <div id="gameWindow">
      <p id="question">Question.</p>
    </div>
  <?php require_once($pathToRoot."includes/footer.php"); ?>
