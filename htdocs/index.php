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
      <p>
        Vælg en pakke at spille.:<br>
        <ul>
          <?php
            $loopTimes = 0;
            foreach ($packs as &$value) {
                echo "<li><a href='?pack=".$value[1]."'>".$value[0]."</a></li>";
                /*if (!(count($packs) - 1 == $loopTimes)) {
                  echo "<br>";
                }*/
                $loopTimes += 1;
            }
            unset($value); // break the reference with the last element
            unset($loopTimes);
          ?>
        </ul>
      </p>
    </div>
    <div id="gameWindow">
      <p id="question">Question.</p>
    </div>
  <?php require_once($pathToRoot."includes/footer.php"); ?>
