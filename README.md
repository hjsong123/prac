# 음원 플레이어 제작 프로젝트
<img src="https://github.com/hjsong123/prac/blob/master/public/main_page.PNG">
<img src="https://github.com/hjsong123/prac/blob/master/public/React%20App%20-%20Chrome%202025-03-10%2011-49-22.gif">

<div align=center><h1>📚 STACKS</h1></div>
<div align=center>
    <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
    <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
    <br>
    <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
    <img src="https://img.shields.io/badge/ZUSTAND-7408FF?style=for-the-badge&logo=react&logoColor=white">
    <br>
    <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
    <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
    <img src="https://img.shields.io/badge/fontawesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white">
    <br>
</div>

<div align=center><h1>제작과정</h1></div>

작업은 codepen의 한가지 작품을 보고 실행하게 되었다.
<br>
참고한 작품 : <https://codepen.io/emilcarlsson/pen/WdRRMX>
<br>

<div align=center><h3>디자인</h3></div>  
처음에는 디자인 먼저 가볍게 구상하기로 했다.   
<img src="https://github.com/hjsong123/prac/blob/master/public/design.PNG">
피그마에 대해서는 겉핧기 식으로만 알기 때문에 구체적인 가이드라인을 잡기보다 구상만 하는 느낌으로 진행했다.   

메인 페이지는 피그마를 통해 어느정도 비슷하게 구현 되었지만 음원 플레이어 페이지는 구상과 많이 다른 느낌으로 진행되었다.   

애초애 각 잡고 하는 프로젝트가 아니므로 큰 상관은 없었지만 뭐 마음에 들면 장땡 아니겠는가.   

-----
-----   


<div align=center><h3>develop</h3></div>    
음원 데이터는 모두 codepen 예제에서 사용된 오픈데이터를 사용했고, *zustand*를 이용해서 전역 상태관리를 진행했다.   

원래는 그냥 props로 넘겨서 진행하려했으나 얼마 되지도 않는 페이지에서 로드하고 꼬이고 하는 과정이 여간 귀찮은게 아니었기에   

결국 라이브러리 통해서 상태관리를 진행했다. 2022년도 redux 깔짝 이후, 처음 써보는 상태관리 라이브러리였는데   

뒷북이지만 문법이랄것도 거의 없고, 직관적이라 사용하기가 redux와 비교해 정말 쉬웠다.   

-----
<img align=center src="https://github.com/hjsong123/prac/blob/master/public/React%20App%20-%20Chrome%202025-03-10%2021-16-37.gif">

이후에는 특별할 것없는 기본 애니메이션과 js를 이용해 동적인 pause, play, next, prev 기능을 제작했고,   

원래는 배경화면도 커버이미지를 분석하여 대표이미지를 뽑아내는 color-thrif 라이브러리를 통해 동적으로 설정하려 했으나   

서버에서 이미지를 받아오는 과정에서 CORP오류가 생겨 해결하려면 프록시 서버나, 백엔드 도메인에서 해결해야 했기에   

그냥 데이터에 color property를 추가했다.   

-----

또한 음원 플레이 중 배경이 너무 단조로워 gradient animation을 통해 화면을 움직이게 했으나   

전체적으로 아쉬워 codepen을 둘러보는 중, 좋은 이펙트를 찾았다.   

Fabio Ottaviani : <https://codepen.io/supah/pen/XpOrwX>   

<img src="https://github.com/hjsong123/prac/blob/master/public/frequency.PNG">

이 효과에서 speed를 조정하면 노래에 맞춰 배경화면 연출을 할 수 있어 추가로 코드를 가져왔다.   

paper.js 라이브러리를 다운받고 코드를 받아와 수정해주니   

<img src="https://github.com/hjsong123/prac/blob/master/public/React%20App%20-%20Chrome%202025-03-10%2011-49-22.gif">

위와 같은 페이지 하나가 만들어지면서 음원 재생 사이트는 얼추 마무리(?) 지어졌다.







