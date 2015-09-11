var bgColors = {
  coral: '#FE5F55',
  beige: '#AFA690',
  mint: '#C7EFCF'
};

var LightBtn = React.createClass({
  onClick: function() {
    fetch('/command/lightSwitch', {credentials: 'include'})
    .then(function(response) {
      return response.text();
    });
  },
  render: function() {
    var classString = 'lampIcon' + (this.props.lightIsOn ? ' isOn' : '');
    // var cx = React.addons.classSet;
    // var classes = cx({
    //   'lampIcon': true,
    //   'isOn': this.props.lightIsOn
    // });
    return (
      <div className="dashboardItem">
        <div className="dashboardItemInner">
          <div className="dashboardItemBlock lampBlock" title="turn light at home on or off">
            <svg className={classString} onClick={this.onClick} viewBox="0 0 20 20">
              <g transform="translate(3.000000, 1.000000)">
                <path d="M2.51791892,8.1966 C2.54591892,8.15385 4.73124324,4.91283 4.81372973,0.23313 C4.44594595,0.19 4.11354054,0.1368 3.82786486,0.07486 C3.80743243,0.67108 3.66175676,1.76434 3.14924324,3.34837 C2.36089189,6.00723 0.609189189,6.5341 0.00378378378,6.70681 C-0.0278108108,6.86052 1.02048649,8.65507 2.51791892,8.1966 M6.85110811,8.87984 L6.85110811,0.35017 C6.21940541,0.34599 5.6227027,0.31483 5.08918919,0.26258 C5.00708108,4.97287 2.81494595,8.27906 2.81494595,8.27906 C4.62681081,10.53493 6.85110811,8.87984 6.85110811,8.87984 M11.1852432,8.27906 C11.1852432,8.27906 8.99310811,4.97287 8.911,0.26258 C8.37767568,0.31483 7.78078378,0.3458 7.14927027,0.35017 L7.14927027,8.88003 C7.14908108,8.87984 9.37337838,10.53493 11.1852432,8.27906 M13.9964054,6.70681 C13.391,6.53391 11.6392973,6.00704 10.8505676,3.34818 C10.3382432,1.76415 10.1923784,0.67108 10.1721351,0.07467 C9.88664865,0.1368 9.55424324,0.19 9.18645946,0.23313 C9.26913514,4.91283 11.4542703,8.15385 11.4824595,8.1966 C12.9797027,8.65507 14.028,6.86052 13.9964054,6.70681"></path>
                <path d="M7.54164865,9.45136 C7.25275676,9.31133 7.00018919,9.15591 7.00018919,9.15591 C7.00018919,9.15591 6.74743243,9.31114 6.45854054,9.45136 L6.45854054,9.69665 C6.45854054,12.25747 3.74764865,12.25595 3.74764865,14.56217 C3.74764865,16.19389 5.09978378,16.83039 5.09978378,16.83039 C5.02827027,16.83039 4.80843243,16.9841 4.80843243,17.09753 C4.80843243,17.38367 5.21783784,17.43022 5.21783784,17.43022 C5.21783784,17.43022 5.28159459,17.46214 5.28159459,17.56626 C5.28159459,17.67019 5.21140541,17.70857 5.21140541,17.70857 C4.55397297,17.82561 4.16783784,18.03404 4.16783784,18.03404 L4.16859459,18.92514 L9.83159459,18.92514 L9.83254054,18.03404 C9.83254054,18.03404 9.44621622,17.82561 8.78878378,17.70857 C8.78878378,17.70857 8.71878378,17.67019 8.71878378,17.56626 C8.71878378,17.46214 8.78235135,17.43022 8.78235135,17.43022 C8.78235135,17.43022 9.19175676,17.38367 9.19175676,17.09753 C9.19175676,16.98391 8.97210811,16.83039 8.90021622,16.83039 C8.90021622,16.83039 10.2523514,16.1937 10.2523514,14.56217 C10.2523514,12.25576 7.54164865,12.25728 7.54164865,9.69665 L7.54164865,9.45136 L7.54164865,9.45136 Z"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
});

var TempMeter = React.createClass({
  render: function() {
    var tempMeterLevel;
    if (this.props.temp <= 20) {
      tempMeterLevel = 'isLow';
    } else if (this.props.temp >= 21 && this.props.temp <= 26) {
      tempMeterLevel = 'isMid';
    } else if (this.props.temp > 26) {
      tempMeterLevel = 'isHigh';
    }
    var classString = 'homeTempIcon ' + tempMeterLevel;

    return (
      <div className="dashboardItem">
        <div className="dashboardItemInner">
          <div className="dashboardItemBlock homeTempBlock" title="temperature at home">
            <svg className={classString} viewBox="0 0 20 20">
              <g transform="translate(5.000000, 0.000000)">
                <path d="M7.62958333,11.5016667 L7.62958333,3.07833333 C7.62958333,1.585 6.41458333,0.37 4.92125,0.37 C3.42791667,0.37 2.21291667,1.585 2.21291667,3.07833333 L2.21291667,11.50125 C0.972083333,12.37875 0.242083333,13.77875 0.242083333,15.3120833 C0.242083333,17.8920833 2.34125,19.99125 4.92125,19.99125 C7.50125,19.99125 9.60041667,17.8920833 9.60041667,15.3120833 C9.60041667,13.77875 8.87,12.3791667 7.62958333,11.5016667 L7.62958333,11.5016667 Z M4.92125,18.7416667 C3.03041667,18.7416667 1.49208333,17.2033333 1.49208333,15.3125 C1.49208333,14.1008333 2.11583333,13.0025 3.16,12.375 C3.34833333,12.2620833 3.46333333,12.0583333 3.46333333,11.8391667 L3.46333333,3.07833333 C3.46333333,2.27416667 4.1175,1.62 4.92166667,1.62 C5.72583333,1.62 6.38,2.27416667 6.38,3.07833333 L6.38,11.8391667 C6.38,12.0583333 6.495,12.2620833 6.68333333,12.375 C7.72791667,13.0025 8.35125,14.1008333 8.35125,15.3125 C8.35041667,17.2033333 6.81208333,18.7416667 4.92125,18.7416667 L4.92125,18.7416667 Z" className="tempIconBox"></path>
                <path d="M5.54625,13.23125 L5.54625,11.6541667 C5.54625,11.3091667 5.26666667,11.0291667 4.92125,11.0291667 C4.57583333,11.0291667 4.29625,11.3091667 4.29625,11.6541667 L4.29625,13.23125 C3.3975,13.50125 2.73833333,14.3258333 2.73833333,15.3125 C2.73833333,16.5183333 3.71583333,17.4954167 4.92125,17.4954167 C6.12666667,17.4954167 7.10416667,16.5179167 7.10416667,15.3125 C7.10416667,14.3258333 6.445,13.50125 5.54625,13.23125 L5.54625,13.23125 Z M4.40875,14.515 C4.12458333,14.6354167 3.89041667,14.8525 3.74916667,15.12625 C3.71208333,15.1979167 3.63916667,15.2391667 3.56375,15.2391667 C3.53166667,15.2391667 3.49916667,15.2316667 3.46833333,15.2158333 C3.36625,15.1629167 3.32625,15.0370833 3.37875,14.935 C3.56458333,14.575 3.8725,14.2895833 4.24625,14.1316667 C4.35125,14.08625 4.47416667,14.1358333 4.51916667,14.2420833 C4.56416667,14.3483333 4.51458333,14.4704167 4.40875,14.515 L4.40875,14.515 Z" className="tempIconLow"></path>
                <path d="M5.54625,7.4875 C5.54625,7.1425 5.26666667,6.8625 4.92125,6.8625 C4.57583333,6.8625 4.29625,7.1425 4.29625,7.4875 L4.29625,13.23125 C3.3975,13.50125 2.73833333,14.3258333 2.73833333,15.3125 C2.73833333,16.5183333 3.71583333,17.4954167 4.92125,17.4954167 C6.12666667,17.4954167 7.10416667,16.5179167 7.10416667,15.3125 C7.10416667,14.3258333 6.445,13.50125 5.54625,13.23125 L5.54625,7.4875 Z M4.40875,14.515 C4.12458333,14.6354167 3.89041667,14.8525 3.74916667,15.12625 C3.71208333,15.1979167 3.63916667,15.2391667 3.56375,15.2391667 C3.53166667,15.2391667 3.49916667,15.2316667 3.46833333,15.2158333 C3.36625,15.1629167 3.32625,15.0370833 3.37875,14.935 C3.56458333,14.575 3.8725,14.2895833 4.24625,14.1316667 C4.35125,14.08625 4.47416667,14.1358333 4.51916667,14.2420833 C4.56416667,14.3483333 4.51458333,14.4704167 4.40875,14.515 L4.40875,14.515 Z" className="tempIconMid"></path>
                <path d="M5.54625,3.32083333 C5.54625,2.97583333 5.26666667,2.69583333 4.92125,2.69583333 C4.57583333,2.69583333 4.29625,2.97583333 4.29625,3.32083333 L4.29625,13.23125 C3.3975,13.50125 2.73833333,14.3258333 2.73833333,15.3125 C2.73833333,16.5183333 3.71583333,17.4954167 4.92125,17.4954167 C6.12666667,17.4954167 7.10416667,16.5179167 7.10416667,15.3125 C7.10416667,14.3258333 6.445,13.50125 5.54625,13.23125 L5.54625,3.32083333 Z M4.40875,14.515 C4.12458333,14.6354167 3.89041667,14.8525 3.74916667,15.12625 C3.71208333,15.1979167 3.63916667,15.2391667 3.56375,15.2391667 C3.53166667,15.2391667 3.49916667,15.2316667 3.46833333,15.2158333 C3.36625,15.1629167 3.32625,15.0370833 3.37875,14.935 C3.56458333,14.575 3.8725,14.2895833 4.24625,14.1316667 C4.35125,14.08625 4.47416667,14.1358333 4.51916667,14.2420833 C4.56416667,14.3483333 4.51458333,14.4704167 4.40875,14.515 L4.40875,14.515 Z" className="tempIconHigh"></path>
              </g>
            </svg>
            {this.props.temp}
          </div>
        </div>
      </div>
    );
  }
});

var LuxMeter = React.createClass({
  renderIcon: function() {
    if (this.props.lux <= 70) {
      return (
        <svg className="luxIcon" viewBox="0 0 20 20">
          <path d="M10.544,8.717l1.166-0.855l1.166,0.855l-0.467-1.399l1.012-0.778h-1.244L11.71,5.297l-0.466,1.244H10l1.011,0.778L10.544,8.717z M15.986,9.572l-0.467,1.244h-1.244l1.011,0.777l-0.467,1.4l1.167-0.855l1.165,0.855l-0.466-1.4l1.011-0.777h-1.244L15.986,9.572z M7.007,6.552c0-2.259,0.795-4.33,2.117-5.955C4.34,1.042,0.594,5.07,0.594,9.98c0,5.207,4.211,9.426,9.406,9.426c2.94,0,5.972-1.354,7.696-3.472c-0.289,0.026-0.987,0.044-1.283,0.044C11.219,15.979,7.007,11.759,7.007,6.552 M10,18.55c-4.715,0-8.551-3.845-8.551-8.57c0-3.783,2.407-6.999,5.842-8.131C6.549,3.295,6.152,4.911,6.152,6.552c0,5.368,4.125,9.788,9.365,10.245C13.972,17.893,11.973,18.55,10,18.55 M19.406,2.304h-1.71l-0.642-1.71l-0.642,1.71h-1.71l1.39,1.069l-0.642,1.924l1.604-1.176l1.604,1.176l-0.642-1.924L19.406,2.304z"></path>
        </svg>
      );
    } else if (this.props.lux >= 71) {
      return (
        <svg className="luxIcon" viewBox="0 0 20 20">
          <path d="M5.114,5.726c0.169,0.168,0.442,0.168,0.611,0c0.168-0.169,0.168-0.442,0-0.61L3.893,3.282c-0.168-0.168-0.442-0.168-0.61,0c-0.169,0.169-0.169,0.442,0,0.611L5.114,5.726z M3.955,10c0-0.239-0.193-0.432-0.432-0.432H0.932C0.693,9.568,0.5,9.761,0.5,10s0.193,0.432,0.432,0.432h2.591C3.761,10.432,3.955,10.239,3.955,10 M10,3.955c0.238,0,0.432-0.193,0.432-0.432v-2.59C10.432,0.693,10.238,0.5,10,0.5S9.568,0.693,9.568,0.932v2.59C9.568,3.762,9.762,3.955,10,3.955 M14.886,5.726l1.832-1.833c0.169-0.168,0.169-0.442,0-0.611c-0.169-0.168-0.442-0.168-0.61,0l-1.833,1.833c-0.169,0.168-0.169,0.441,0,0.61C14.443,5.894,14.717,5.894,14.886,5.726 M5.114,14.274l-1.832,1.833c-0.169,0.168-0.169,0.441,0,0.61c0.168,0.169,0.442,0.169,0.61,0l1.833-1.832c0.168-0.169,0.168-0.442,0-0.611C5.557,14.106,5.283,14.106,5.114,14.274 M19.068,9.568h-2.591c-0.238,0-0.433,0.193-0.433,0.432s0.194,0.432,0.433,0.432h2.591c0.238,0,0.432-0.193,0.432-0.432S19.307,9.568,19.068,9.568 M14.886,14.274c-0.169-0.168-0.442-0.168-0.611,0c-0.169,0.169-0.169,0.442,0,0.611l1.833,1.832c0.168,0.169,0.441,0.169,0.61,0s0.169-0.442,0-0.61L14.886,14.274z M10,4.818c-2.861,0-5.182,2.32-5.182,5.182c0,2.862,2.321,5.182,5.182,5.182s5.182-2.319,5.182-5.182C15.182,7.139,12.861,4.818,10,4.818M10,14.318c-2.385,0-4.318-1.934-4.318-4.318c0-2.385,1.933-4.318,4.318-4.318c2.386,0,4.318,1.933,4.318,4.318C14.318,12.385,12.386,14.318,10,14.318 M10,16.045c-0.238,0-0.432,0.193-0.432,0.433v2.591c0,0.238,0.194,0.432,0.432,0.432s0.432-0.193,0.432-0.432v-2.591C10.432,16.238,10.238,16.045,10,16.045"></path>
        </svg>
      );
    } else {
      return (
        <div>?</div>
      );
    }
  },
  render: function() {
    return (
      <div className="dashboardItem">
        <div className="dashboardItemInner">
          <div className="dashboardItemBlock luxBlock" title="brightness (light, lux) level at home">
            {this.renderIcon()}
            lux is: {this.props.lux}
          </div>
        </div>
      </div>
    );
  }
});

var Motion = React.createClass({
  render: function() {
    return(
      <div className="dashboardItem">
        <div className="dashboardItemInner">
          <div className="dashboardItemBlock motionBlock" title={this.props.lastMotion.unix}>
            <svg className="motionIcon" viewBox="0 0 20 20">
              <path d="M17.7849219,18.9962058 C16.8697409,18.7752104 13.05762,16.2520628 13.05762,16.2520628 C13.05762,16.2520628 11.1954586,15.1960847 11.850445,12.4931408 C12.7734259,12.288545 13.5838091,11.9323524 14.2097961,11.472162 L14.2095961,11.4747619 C17.2611328,9.2432082 15.3369727,5.29909004 15.3341728,5.2916902 C15.0561785,4.56270532 14.7957839,3.84512021 14.5291895,3.27973194 C14.4409913,3.09253583 14.357793,2.9157395 14.2889944,2.75934274 C14.0359997,2.18195472 13.973801,1.70316466 14.1073982,1.37457148 C14.2057962,1.13337648 14.3847925,1.03697848 14.4303915,1.01597892 C14.5407892,0.980779649 14.6241875,0.929180719 14.6859862,0.866782014 L14.6859862,0.867981989 C14.8729823,0.80238335 15.0971777,0.756584301 15.2379747,0.745984521 C15.5543682,0.721585027 15.4853696,0.641186695 15.4853696,0.641186695 L14.8071837,0.641186695 C14.8111836,0.622787077 14.8139835,0.589587766 14.8155835,0.570388164 L15.4877696,0.570388164 C15.4877696,0.570388164 15.514369,0.49058982 15.3313728,0.46699031 C15.2071754,0.450790646 14.838983,0.38699197 14.793184,0.381792078 C14.7247854,0.143997012 14.4631908,0 14.0779988,0 C13.6300081,0 13.4298123,0.235395116 13.4060128,0.534788903 C13.394213,0.678785915 13.1888173,2.09755648 13.6526076,3.04013692 C13.732206,3.20213356 13.8102044,3.38652973 13.9006025,3.57832575 C14.1947964,4.2023128 14.5447891,4.94489739 14.7291853,5.71528141 C14.8127836,6.20787119 14.6713865,6.64346215 14.358793,6.77225947 C13.8802029,5.51668553 12.3248352,4.59630463 10.4792735,4.59630463 C10.0630821,4.59630463 9.66169046,4.64310365 9.28409829,4.72990185 C11.1394598,4.84929938 11.8178457,5.6576826 11.8178457,5.6576826 C11.8178457,5.6576826 8.35011767,4.6313039 7.41213713,5.64668283 C8.09912288,5.59948381 9.27609846,5.58908403 9.79408771,6.00607537 C9.79408771,6.00607537 7.17694202,5.69488183 6.5799544,6.8240584 C7.37853783,6.44166633 8.16712147,6.72446047 8.16712147,6.72446047 C7.49893533,6.79965891 6.52515554,7.15985143 6.47515658,7.93603533 C7.25614037,7.21225034 8.00832476,7.46944501 8.00832476,7.46944501 C7.43393668,7.64584135 6.94714678,8.25142878 6.69535201,8.61962114 C5.57357529,8.31042756 5.07558562,7.66504095 5.06858576,7.65584114 C5.008787,7.38724671 4.88618955,7.06705336 4.67419395,6.79125908 C4.26040253,6.1398726 3.40662025,5.71528141 3.24482361,5.71308145 C2.88983097,5.60908361 2.57103759,5.79147983 2.56263776,6.03327481 C2.55303796,6.27666976 2.7582337,6.48466544 2.99982869,6.55746393 C3.10502651,6.57786351 3.70141413,6.73966015 4.14040502,7.13485195 C3.46481904,6.76765957 2.51643872,6.8096587 2.37384168,6.88585712 C2.01304917,6.96685544 1.82165314,7.28104892 1.93085087,7.49684444 C2.03964861,7.71443992 2.31924281,7.79723821 2.56603769,7.74383931 C2.66783558,7.71064 3.26782313,7.56344306 3.84241121,7.6964403 C3.07402715,7.70204018 2.26384396,8.19862988 2.17584579,8.33462706 C1.89905153,8.58062195 1.88245188,8.94821432 2.08184774,9.0844115 C2.28204359,9.22220864 2.56683768,9.15920994 2.75683373,8.9928134 C2.83003221,8.91421503 3.28462278,8.49442374 3.85201101,8.3326271 C3.18202491,8.71001927 2.71143468,9.53760209 2.69963492,9.69939874 C2.57583749,10.0487915 2.73843411,10.3785846 2.97862913,10.4009842 C3.22022412,10.4249837 3.43901958,10.2315877 3.52561778,9.99379263 C3.54961728,9.8987946 3.71441386,9.40180491 4.06040668,8.99881327 C3.852411,9.52060245 3.85201101,10.1161901 3.90081,10.2227879 C3.95200893,10.5373813 4.21120355,10.7181776 4.40139961,10.6351793 C4.59299563,10.552181 4.67779387,10.315386 4.64479456,10.1003904 C4.63479477,10.0619912 4.61119525,9.9421937 4.59899551,9.78019706 C4.92318878,10.9805722 6.20736213,11.9725516 7.93232634,12.4249422 C7.73933035,12.6097383 7.29513956,12.9221319 6.35995897,13.1423273 C6.35995897,13.1423273 5.52557628,13.1829265 5.72257219,14.4037011 L4.61019528,18.0896246 C4.61019528,18.0896246 4.54059672,18.3220198 4.22780321,18.3568191 C4.22780321,18.3568191 3.94960898,18.264421 3.78741235,18.5198157 C3.78741235,18.5198157 3.40502028,18.9732063 3.63681547,19.0316051 C3.68321451,19.0432049 2.57083759,20.0663836 3.26602317,19.9965851 C3.26602317,19.9965851 5.31098073,18.986406 5.51397652,18.2058222 C5.7461717,17.3122408 6.09456447,15.4892786 6.41775777,14.6250965 C6.65475285,13.9911097 6.98554599,13.5083197 8.60791232,13.0439293 C8.60791232,13.0439293 9.35269687,13.0159299 10.1586801,12.6867367 C10.1936794,12.6865368 10.2284787,12.6861368 10.263278,12.6853368 C10.5810714,13.2649248 11.1882588,14.5428982 11.0758611,15.6600751 C11.0758611,15.6600751 11.0712612,16.097866 11.9098438,16.4384589 C13.8858028,17.2408422 15.4139711,18.6068139 15.7915633,18.7526109 C15.8261625,18.7656106 16.092957,19.8105889 16.7537433,19.2873998 C16.7653431,19.2640003 17.344531,19.6013933 17.7967217,19.2526005 C17.7967217,19.2522005 18.4863073,19.1656023 17.7849219,18.9962058 L17.7849219,18.9962058 Z M14.4399913,0.253594738 C14.5127898,0.253594738 14.5725886,0.313193501 14.5725886,0.386591978 C14.5725886,0.459790459 14.5127898,0.519589218 14.4399913,0.519589218 C14.3665928,0.519589218 14.3073941,0.459990455 14.3073941,0.386591978 C14.3073941,0.313193501 14.3665928,0.253594738 14.4399913,0.253594738 L14.4399913,0.253594738 Z"></path>
            </svg>
            {this.props.lastMotion.human}
          </div>
        </div>
      </div>
    );
  }
});

var Dashboard = React.createClass({
  getData: function() {

    // var request = new XMLHttpRequest();
    // request.open('GET', '/data', true);

    // request.onload = function() {
    //   if (request.status >= 200 && request.status < 400) {
    //     // Success!
    //     var data = JSON.parse(request.responseText);
    //     console.log(data);
    //       this.setState({
    //         temp: data.temp,
    //         lux: data.lux,
    //         lightIsOn: data.lightIsOn,
    //         lastMotion: data.lastMotion
    //       });
    //   } else {
    //     console.log('error');
    //   }
    // }.bind(this);

    // request.onerror = function() {
    //   console.log('connection error');
    // };

    // request.send();

    fetch('/data', {credentials: 'include'})
      .then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);
        this.setState({
          temp: data.temp,
          lux: data.lux,
          lightIsOn: data.lightIsOn,
          lastMotion: data.lastMotion
        });
      }.bind(this));
  },
  getInitialState: function() {
    return {
      temp: 0,
      lightIsOn: 0,
      lux: 0,
      lastMotion: 'don’t know yet',
      bgColor: bgColors.coral
    };
  },
  componentDidMount: function() {
    this.getData();
    setInterval(this.getData, 1000);
  },
  render: function() {
    return (
      <div className="dashboard" style={{backgroundColor: this.state.bgColor}}>
        <div className="dashboardInner">
          <LightBtn lightIsOn={this.state.lightIsOn} />
          <TempMeter temp={this.state.temp} />
          <LuxMeter lux={this.state.lux} />
          <Motion lastMotion={this.state.lastMotion} />
        </div>
      </div>
    );
  }
});

React.render(
  <Dashboard />,
  document.body
);
