require('./Xuanxiao.less');

const React = require('react');

const PropTypes = React.PropTypes;

const Dropdown = require('../Dropdown');
const CustomModal = require('../CustomModal');
const itemData = require('./item.json');
const regx = require('../../core/regexp');

class Xuanxiao extends React.Component {

  static defaultProps = {
    abroadData: { name: '未知', apply_contry: '美国' },
    wrapModalTitle: '为我选校',
    submitBtn: '确定',
    btnTitle: '测试选校',
    btnClass: '',
    defaultShowCountry: '美国',
  };

  static propTypes = {
    abroadData: PropTypes.object,
    apply_contry: PropTypes.string,
    qudao_details: PropTypes.string.isRequired,
    wrapModalTitle: PropTypes.string, //  内部modal 大标题 default: 为我选校
    submitBtn: PropTypes.string,  // 内部提交按钮文字 default: 确定
    btnTitle: PropTypes.string, //  触发modal按钮文字
    btnClass: PropTypes.string, //  触发modal按钮 的动态class
    defaultShowCountry: PropTypes.string,
  };

  constructor(props) {
    super();
    this.state = {
      multiItem: props.apply_contry || '美国',
      errorTips: '',
      setClose: false,
    };
  }

  dpCb(key, val) {
    Object.assign(this.props.abroadData, { [key]: val });
  }

  resetErrorTips() {
    setTimeout(() => {
      this.setState({
        errorTips: '',
      });
    }, 2000);
  }

  submitAbroad(evt) {
    evt.preventDefault();
    const { abroadData, qudao_details } = this.props;
    const mobile = this.refs.inputMobileXuanxiao.value;
    if (!regx.MOBILE_REG.test(mobile)) {
      this.setState({
        errorTips: '手机号码错误',
      });
      this.resetErrorTips();
      return;
    }
    if ($.isClickSubmit) return;
    $.isClickSubmit = true;
    const $btn = $(evt.currentTarget);
    $btn.attr('disabled', true).text('loading...');
    abroadData.mobile = mobile;
    abroadData.qudao_details = qudao_details; //  eslint-disable-line
    abroadData.xifenqudao = 'SEM';
    fetch('/api/abroadPlan', {
      method: 'post',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(abroadData),
    }).then(res => res.json())
      .then(data => {
        $.isClickSubmit = false;
        $btn.attr('disabled', false).text('确定');
        if (data.code) {
          this.setState({
            errorTips: '网络异常请稍后再试！',
          });
          this.resetErrorTips();
        } else {
          this.setState({
            errorTips: '提交成功！！',
            setClose: true,
          });
          $('#successModal').on('hidden.bs.modal', () => {
            this.setState({ setClose: false });
          });
          $('#successModal').modal('show');
        }
      });
  }

  render() {
    return (
      <div>
        <CustomModal btnclasses={`modal-btn ${this.props.btnClass}`} title={''} isFooter={false} btnTitle={this.props.btnTitle} setClose={this.state.setClose} modalclasses={'xuanxiao-container'}>
          <div className="xuanxiao-form">
            <h3>{this.props.wrapModalTitle}</h3>
            <span className="xuanxiao-span">申请意向:</span><Dropdown classes={'apply-country'} defaultItem={this.props.defaultShowCountry} items={itemData.country} cb={(key, val) => this.dpCb(key, val)} formKey={'apply_contry'} />
            <Dropdown classes={'apply-program'} defaultItem={'申请项目'} items={itemData.program} cb={(key, val) => this.dpCb(key, val)} formKey={'apply_education'} />
            <span className="xuanxiao-span">平均成绩:</span><Dropdown classes={'apply-avgs'} defaultItem={'国内平均成绩'} items={itemData.avgs} cb={(key, val) => this.dpCb(key, val)} formKey={'average_score'} />
            <span className="xuanxiao-span">手机号:</span><p className="xuanxiao-input"><input type="text" placeholder="请输入手机号码" ref="inputMobileXuanxiao" /></p>
            <p className="modal-tips" data-toggle="tooltip" data-placement="right" title="" data-original-title="手机号码只用于<br/>顺顺留学的必要留学沟通<br/>小顺子打死也不会出卖你的!">
              <span><img src="https://o6achqjeh.qnssl.com/public/assets/images/en/enmaster/why.png" alt="" /></span>隐私声明
            </p>
            <p className="err-tips">{this.state.errorTips}</p>
            <p><button type="button" className="btn btn-default" onClick={evt => this.submitAbroad(evt)}>{this.props.submitBtn}</button></p>
          </div>
          <div className="xuanxiao-text">
            <h3>大家选择顺顺</h3>
            <img src={require('./modal-img.png')} alt="" />
          </div>
        </CustomModal>
      </div>);
  }
}

module.exports = Xuanxiao;
