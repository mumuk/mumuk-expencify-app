import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from "../actions/auth"

export const LoginPage = ({startLogin}) => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Расходы</h1>
        <p>Время взять расходы под контроль</p>
        <button className=" button login-button" onClick={startLogin}>Войти через Google</button>
      </div>

    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});


export default connect(undefined, mapDispatchToProps)(LoginPage);