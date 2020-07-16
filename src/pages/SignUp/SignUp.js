import React, { useReducer, useState, useEffect, useCallback } from 'react';
import { signupUser } from '../../lib/api';
import './SignUp.scss';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

function stateCheck(state) {
  let idxArr = [];
  Object.values(state).forEach((el, idx) => {
    if (el.length === 0) {
      idxArr.push(idx);
    }
  });
  return idxArr;
}

const SignUp = ({ history }) => {
  const [state, dispatch] = useReducer(reducer, {
    id: '',
    nickName: '',
    password: '',
    passwordConfirm: '',
    phone: '',
    address: '',
  });

  const [idEmpty, setIdEmpty] = useState(false);
  const [nickNameEmpty, setNickNameEmpty] = useState(false);
  const [passwordEmpty, setPasswordEmpty] = useState(false);
  const [passwordConfirmEmpty, setPasswordConfirmEmpty] = useState(false);
  const [phoneEmpty, setPhoneEmpty] = useState(false);
  const [addressEmpty, setAddressEmpty] = useState(false);

  const { id, nickName, password, passwordConfirm, phone, address } = state;
  const [showPwdErr, setShowPwdErr] = useState(true);

  const onChange = (evt) => {
    dispatch(evt.target);
  };

  useEffect(() => {
    if (
      passwordConfirm.length > 0 &&
      password.length > 0 &&
      passwordConfirm !== password
    ) {
      setShowPwdErr(false);
    } else {
      setShowPwdErr(true);
    }
  }, [passwordConfirm]);

  const handleSumbit = useCallback(
    async (evt) => {
      setIdEmpty(false);
      setNickNameEmpty(false);
      setPasswordEmpty(false);
      setPasswordConfirmEmpty(false);
      setPhoneEmpty(false);
      setAddressEmpty(false);
      try {
        evt.preventDefault();
        const idxArr = stateCheck(state);
        if (showPwdErr && idxArr.length === 0) {
          await signupUser({ id, password, phone, address });
          history.push('/signin');
        } else {
          idxArr.forEach((idx) => {
            if (idx === 0) {
              setIdEmpty(true);
            }
            if (idx === 1) {
              setNickNameEmpty(true);
            }
            if (idx === 2) {
              setPasswordEmpty(true);
            }
            if (idx === 3) {
              setPasswordConfirmEmpty(true);
            }
            if (idx === 4) {
              setPhoneEmpty(true);
            }
            if (idx === 5) {
              setAddressEmpty(true);
            }
          });
        }
      } catch {}
    },
    [id, nickName, password, passwordConfirm, phone, address],
  );

  // const handleSumbit = async (evt) => {
  //   try {
  //     evt.preventDefault();
  //     const idxArr = stateCheck(state);
  //     console.log(idxArr);
  //     if (showPwdErr && idxArr.length === 0) {
  //       setIdEmpty(false);
  //       setPasswordEmpty(false);
  //       setPasswordConfirmEmpty(false);
  //       setPhoneEmpty(false);
  //       setAddressEmpty(false);
  //       // await signupUser({ id, password, phone, address });
  //       // history.push('/signin');
  //     } else {
  //       idxArr.forEach((idx) => {
  //         if (idx === 0) {
  //           setIdEmpty(true);
  //         }
  //         if (idx === 1) {
  //           setPasswordEmpty(true);
  //         }
  //         if (idx === 2) {
  //           setPasswordConfirmEmpty(true);
  //         }
  //         if (idx === 3) {
  //           setPhoneEmpty(true);
  //         }
  //         if (idx === 4) {
  //           setAddressEmpty(true);
  //         }
  //       });
  //     }
  //   } catch {}
  // };
  return (
    <div className="signup-container">
      <form onSubmit={handleSumbit}>
        <h2>회원가입</h2>
        <input
          class={idEmpty ? 'marginChange' : ''}
          type="text"
          name="id"
          value={id}
          placeholder="아이디"
          onChange={onChange}
        />
        {idEmpty && <label className="showErr">ID를 입력해주세요.</label>}
        <input
          class={nickNameEmpty ? 'marginChange' : ''}
          type="text"
          name="nickName"
          value={nickName}
          placeholder="닉네임"
          onChange={onChange}
        />
        {nickNameEmpty && (
          <label className="showErr">닉네임을 입력해주세요.</label>
        )}
        <input
          class={passwordEmpty ? 'marginChange' : ''}
          type="password"
          name="password"
          value={password}
          placeholder="비밀번호"
          onChange={onChange}
        />
        {passwordEmpty && (
          <label className="showErr">비밀번호를 입력해주세요.</label>
        )}
        <input
          className={!showPwdErr || passwordConfirmEmpty ? 'marginChange' : ''}
          type="password"
          name="passwordConfirm"
          value={passwordConfirm}
          placeholder="비밀번호 확인"
          onChange={onChange}
        />
        {(!showPwdErr || passwordConfirmEmpty) && (
          <label className="showErr">
            {!showPwdErr
              ? `비밀번호가 일치하지 않습니다!`
              : `비밀번호를 입력해주세요.`}
          </label>
        )}
        <input
          className={phoneEmpty ? 'marginChange' : ''}
          type="text"
          name="phone"
          value={phone}
          placeholder="전화번호"
          onChange={onChange}
        />
        {phoneEmpty && (
          <label className="showErr">전화번호를 입력해주세요.</label>
        )}
        <input
          className={addressEmpty ? 'marginChange' : ''}
          type="text"
          name="address"
          value={address}
          placeholder="주소"
          onChange={onChange}
        />
        {addressEmpty && (
          <label className="showErr">주소를 입력해주세요.</label>
        )}
        <button type="submit" className="btn">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignUp;
