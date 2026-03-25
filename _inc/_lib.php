<?php

	function GetBoardPageing($pageName,$page,$totalPage){
		global $boardNo,$boardPageLink,$bCode,$pageNum,$subNum,$linkSearch;

		$sPage=(int)(($page-1)/$boardPageLink)*$boardPageLink;

		// 이전 페이지
		if($page > 1){
			$pPage = $page-1;
			$pPageLink = '<li data-page="'.$pPage.'"><a href="'.$pageName.'?page='.$pPage.''.$linkSearch.'">&lt;&lt;</a></li>';
		} else {
			$pPageLink = '<li data-page="1" class="disabled"><a title="이전 페이지로 이동">&lt;&lt;</a></li>';
		}

		// 페이지 리스트
		$i=1;
		while($i+$sPage<=$totalPage&&$i<=$boardPageLink) {
			$mPage = $i+$sPage;
			if($page==$mPage) $mPageLink .= '<li data-page="'.$mPage.'" class="active"><a>'.$mPage.'</a></li>';
			else $mPageLink .= '<li data-page="'.$mPage.'"><a href="'.$pageName.'?page='.$mPage.''.$linkSearch.'" class="pageNum">'.$mPage.'</a></li>';
			$i++;
		}

		// 다음 페이지
		if($page < $totalPage){
			$nPage = $page+1;
			$nPageLink = '<li data-page="'.$nPage.'"><a href="'.$pageName.'?page='.$nPage.''.$linkSearch.'" class="nextBtn" title="다음 페이지로 이동">&gt;&gt;</a></li>';
		} else {
			$nPageLink = '<li data-page="'.$nPage.'" class="disabled"><a title="다음 페이지로 이동">&gt;&gt;</a></li>';
		}

		$rePage = $pPageLink.$mPageLink.$nPageLink;
		return $rePage;
	}

	function UploadFile($userfile, $userfile_name, $userfile_size, $userdir, $sel_over="N", $sel_nm="N") {

		if($userfile_name != '') {
			$full_filename = explode (".", "$userfile_name");
			$extension = $full_filename[sizeof($full_filename)-1];
			$oldname = $full_filename[sizeof($full_filename)-2];

			if (!strcmp($extension, "html") || !strcmp($extension, "htm") || !strcmp($extension, "php") ||!strcmp($extension, "php3") || 	!strcmp($extension, "inc") ||	!strcmp($extension, "pl") || !strcmp($extension, "cgi") ||	!strcmp($extension, "asp") || !strcmp($extension, " ") || !strcmp($extension, "phtml") || !strcmp($extension, "bmp")) {
				$upload = "failed";
			}	else {
				$savedir = $userdir;

				$file_ext = GetFileExt($userfile_name);

				if($sel_nm == "N") {
					$file_main = $oldname;
				} else {
					$file_main = $sel_nm;
				}
				$file_name = $file_main.".".$file_ext;

				if ($userfile_size > 31457280  ) {
					$upload = "size";
					return $upload;
				}

				if (file_exists("$savedir/$file_name")) {
					if($sel_over == "N") {
						$i = 1;
						while(file_exists("$savedir/$file_name")){
							$file_name = $file_main."_".$i.".".$file_ext;
							$i++;
						}
					}
					else unlink("$savedir/$file_name");
				}

				$file_path	= "$savedir/$file_name";


				if( !copy($userfile, $file_path) ) {
					$upload = "failed";
				} else {
					$upload = $file_name;
				}

				unlink($userfile);
			}
	  }	else {
			$upload = "failed";
		}

		return $upload;
  }

	function GetFileExt( $file ){
//		$file=eregi_replace("^.+\.([^\.]{1,})$","\\1",$file); //eregi함수는 php5.3 이상 안됨
		$file = preg_replace('/^.*\.([^.]+)$/D', '$1', $file);
		return strtolower( $file );
	}
?>