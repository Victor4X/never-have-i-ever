      <hr>

      <footer>
        <p>Kekshop - Version: <?php echo $version; ?></p>
      </footer>
    </div>
    <script type="text/javascript">
      var packIdentifiers = [];
      var packContent = [];
      <?php
        foreach ($packs as $item) {
          echo 'packIdentifiers.push("'.$item[1].'");';
        }
      ?>
    </script>
    <script type="text/javascript" src="<?php echo $pathToHtdocs ?>js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="<?php echo $pathToHtdocs ?>js/bootstrap.min.js"></script>
    <?php
      foreach ($packs as $item) {
        echo '<script type="text/javascript" src="'.$pathToHtdocs.'js/packs/'.$item[1].'.js"></script>';
      }
    ?>
    <script type="text/javascript">
      <?php
        echo 'packContent.push('.htmlspecialchars($_GET["pack"]).');';
      ?>
    </script>
    <script type="text/javascript" src="<?php echo $pathToHtdocs ?>js/master.js"></script>
  </body>
</html>
