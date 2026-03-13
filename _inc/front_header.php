<? 
	$times = date("Y-m-d H:i:s"); 
  $uri = $_SERVER['REQUEST_URI'];
	$c_array = $_SERVER['PHP_SELF'];
	$filenameClass = basename($c_array, '.php');
?>
<meta charset="UTF-8">
<meta name="Keywords" content="대상중공업, DAESANG">
<meta name="Description" content="<?=$og_description?>">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">

<link rel="shortcut icon" href="/favicon.png" type="image/x-icon">
<link rel="icon" href="/favicon.png" type="image/x-icon">
<!-- <meta name="viewport" content="width=780px"> -->
<? if($CurrentPage=="main"){ ?>
<title><?=$og_title?></title>
<? }else{ ?>
<title><?=$subtitle?> - 대상중공업</title>
<? } ?>
<!-- <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"> -->

<link rel="stylesheet" href="/assets/css/reset.css?reload=<?=$times?>">
<script src="https://kit.fontawesome.com/44ad95e05e.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.2/jquery.modal.css" integrity="sha512-JP49dvydjvdq6qd31grbdqIeExUyLFFIIneoetY/cJ+eQeJ6ok5HhaM4kQfIeQV4maAMGQ5kf4In3T7VKwMufg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="stylesheet" href="/assets/css/common.css?reload=<?=$times?>">
<link rel="stylesheet" href="/assets/css/main.css?reload=<?=$times?>">
<link rel="stylesheet" href="/assets/css/sub.css?reload=<?=$times?>">
<link rel="stylesheet" href="/assets/css/media.css?reload=<?=$times?>">

<script src="https://code.jquery.com/jquery-latest.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.2/jquery.modal.min.js" integrity="sha512-ztxZscxb55lKL+xmWGZEbBHekIzy+1qYKHGZTWZYH1GUwxy0hiA18lW6ORIMj4DHRgvmP/qGcvqwEyFFV7OYVQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="/assets/js/common.js?reload=<?=$times?>"></script>
<? if($CurrentPage=="main"){ ?>
<script src="/assets/js/main.js?reload=<?=$times?>"></script>
<? } ?>
