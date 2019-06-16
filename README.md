# How to setup jest/Enzyme 

1) Enzyme 를 다운로드 한다.
2) setup 파일을 만들고 설정파일(config, Adapter를)만든다.
3) __tests__ 파일 폴더에 작업을 시작한다.
4) __tests__ 의 파일 이름은 *.test.js, .spec.js, __test__/아래의 파일들 테스트 파일이다. (3가지 경우)
5) beforeEach에 이것 저것 글로벌 변수 처럼 추가 한다.
6) 여기에 enzyme 의 shallow 를 쓴다.
7) jest.useFakeTimers();
 Date.now = jest.fn( () => 11111 );
 이렇게 설정 하면  Date.now는 랜덤하게 생성 되는것이 아니라 jest.fn의 내가 설정한 값으로 이용된다.