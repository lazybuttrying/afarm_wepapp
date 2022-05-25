import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

interface InputField {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  required: boolean;
}

enum InputIndex {
  userId = 0,
  password = 1,
  userName = 2,
  userEmail = 3,
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})


export class RegisterPage implements OnInit {
  inputForm: InputField[] = [
    {
      label: '아이디',
      type: 'text',
      placeholder: '아이디를 입력하세요.',
      value: '',
      required: true,
    },
    {
      label: '비밀번호',
      type: 'password',
      placeholder: '비밀번호를 입력하세요.',
      value: '',
      required: true,
    },
    {
      label: '이름',
      type: 'text',
      placeholder: '이름을 입력하세요.',
      value: '',
      required: true,
    },
    {
      label: '이메일',
      type: 'email',
      placeholder: '이메일을 입력하세요.',
      value: '',
      required: true,
    },
  ];

  constructor(
    private userService: UserService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async register() {
    const result: string = await this.userService.insertUser(
      this.inputForm[InputIndex.userId].value,
      this.inputForm[InputIndex.password].value,
      this.inputForm[InputIndex.userName].value,
      this.inputForm[InputIndex.userEmail].value
    );
    if(result) {
      alert('회원가입에 성공하였습니다.');
      this.tokenService.setToken(result);
      this.router.navigate(['/home']);
    }
    else {
      alert('회원가입에 실패하였습니다.');
    }

  }

}
