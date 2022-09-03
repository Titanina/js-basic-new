		
		var isOpen = false;
		var cup = document.querySelector("#cup");
		var smallPics = document.querySelectorAll(".small");

		
		var bigPic = document.querySelector("#cup");  
		var smallPics = document.querySelectorAll(".small");  

		for(i=0; i<smallPics.length; i++) {
			smallPics[i].addEventListener("click", function() {
				newPic = this.src;
				bigPic.setAttribute("src", newPic);
			});
		}

		var view = document.querySelector("#view");
		view.addEventListener("click", function() 
		
		{
			if(isOpen == false)
			
			{
				 //상세 정보가 감춰져있을때 실행할 소스 위치


			document.querySelector("#detail").style.display = "block"; // 상세정보를 화면에 표시
			view.innerText = "상세 설명 닫기"; //링크 내용 수정
			isOpen = true; //표시 상태로 지정

			}
			  else
				{

					document.querySelector("#detail").style.display = "none";
					view.innerText = "상세 설명 보기";
					isOpen = false;
				}

		}
		
		
		
		)

	