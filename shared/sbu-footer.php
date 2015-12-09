	<!-- inc -->
	<?php
		$this_dir = $_SERVER['REQUEST_URI'];
		$dev_dir  = '/development/sb/';
		$prod_dir = '/sb/';
		$is_dev = strpos($this_dir,$dev_dir);
		if($is_dev !== false) {
			$inc = $_SERVER['DOCUMENT_ROOT'] . $dev_dir . "inc/inc.php";
		} else {
			$inc = $_SERVER['DOCUMENT_ROOT'] . $prod_dir . "inc/inc.php";
		}
		include($inc);
		include('sbu-head-code.php');
	?>
	<!-- /inc -->

    <div class="sbu-wrapper clearfix">
    	<div class="sbu-sub-wrapper">

	        <!-- <div.footer-container> -->
	        	<?php if($include_footer==1) {
	        		if($nav_site=='alumni') {
						$nav_type = 'big-n-bold';
						$footer_path = 'footers/alumni-footer.php';
					} else {
						$nav_type = 'default';
						$footer_path = 'footers/for-students-footer.php';
					}
					include($path . $footer_path);
				} ?>
				<?php if($include_footerbar==1) {
	        		if($nav_site=='alumni') {
						$footerbar_path = 'footers/alumni-footerbar.php';
					} else {
						$footerbar_path = 'footerbar.php';
					}
					include($path . $footerbar_path);
				} ?>
			<!-- </div.footer-container> -->

			<!-- <to-top> -->
				<?php if($include_totop==1) {
					$file = "to-top.php";
					include($path . $file);
				} ?>
			<!-- </to-top> -->

        </div><!-- .sbu-sub-wrapper -->
    </div><!-- .sbu-wrapper -->