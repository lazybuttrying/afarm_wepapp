# Afarm

## Architecture
![architecture](https://user-images.githubusercontent.com/79500842/169013703-80e8da4e-7102-4289-a098-95726b2d38b0.png)

## Page Link
![pagelink](https://user-images.githubusercontent.com/79500842/169014123-9c32db11-4fa2-41d3-9e23-17b83d9ce1e3.png)


## 페이지 별 함수 호출

- Register : 회원가입 페이지
  - UserService
    - `insertUser(
    userId: string,
    userPw: string,
    userName: string,
    userEmail: string
  )` : DB에 사용자 정보 저장
  - TokenService
    - `setToken(user_id: string)` : 회원가입 후 로그인 유지를 위한 토큰 저장
- Login : Login 페이지
  - UserService
    - `getUser(user_id: string, pw: string)` : 로그인 후 로그인 성공시 user 반환, 실패시 null
  - TokenService
    - `setToken(user_id: string)` : 로그인 유지를 위한 토큰 저장
  - DroneService
    - `getDrones()` : 로그인된 토큰을 이용해 해당 유저 드론 DB에서 조회 후 localStorage에 데이터 저장
  - QualityService
    - `getQuality()` : 로그인된 토큰을 이용해 해당 유저가 날린 드론 영상들을 조회 후 localStorage에 데이터 저장
- Drone : 드론 목록을 보고, 비행 시간을 설정 가능한 페이지
  - DroneService
    - `getDronesStorage()` : `getDrones()` 메소드 호출로 localStorage에 저장된 드론 목록 불러오기
    - `updateTime(droneId: number, time: number)` : DB에 드론 비행 시간 업데이트
- Flight-info : 드론 비행 정보 수정 페이지
  - DroneService
    - `setFlight(droneId: number,
    init_x: number,
    init_y: number,
    width: number,
    height: number,
    grape_height: number,
    interval: number,
    sight_range: number)` : DB에 드론 비행 정보 업데이트
- DroneUpload : 새로운 드론 추가 페이지
  - DroneService
    - `insertDrone(product_name: string, zone: number, product_img: string)` : DB에 드론 추가
    - `getDrones()` : 로그인된 토큰을 이용해 해당 유저 드론 DB에서 조회 후 데이터 저장 (업로드 후 데이터 최신 갱신용)
- Quality : 포도 품질 확인 페이지
  - QualityService
    - `getQuality()` : 유저가 날린 드론 영상들을 조회 후 localStorage에 데이터 저장
- Grape : 영상에서 확인된 포도 조회 페이지
  - QualityService
    - `getGrapes(quaility_id: number)` : 해당 영상에서 포도알 검출 개수, 불량 개수 조회
