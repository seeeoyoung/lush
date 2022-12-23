		$(document).ready(function(){
				//상단 오른쪽에 있는  햄버거아이콘
				let i = 0;
				$("header button").click(function(){
					//alert('dd');
					i++;
					if( i == 1){
							$("embed" , parent.document).css("height" , "390px");
							$("nav").slideDown();
							$(this).text("close");
					} else {
							$("nav").slideUp();
							$(this).text("menu");
							$("embed" , parent.document).css("height" , "51.9pt");
							i = 0;
					}
				});
			});////전체 끝
