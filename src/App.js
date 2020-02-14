import React from 'react';
import './App.scss';
import 'sanitize.css';

function App() {
  return (
    <footer className="globalFooter">
      <div className="footerOfficeInfo">
        <p className="footerOfficeInfo__name">渋谷区役所</p>
        <p className="footerOfficeInfo__address">〒150-8010 東京都渋谷区宇田川町1-1</p>
        <dl className="footerOfficeInfo__definitionList">
          <div className="footerOfficeInfo__definition">
            <dt className="footerOfficeInfo__term">[開庁時間]</dt>
            <dd className="footerOfficeInfo__description">8時30分から17時（土曜日・日曜日、祝・休日および12月29日から1月3日を除く）</dd>
          </div>
          <div className="footerOfficeInfo__definition">
            <dt className="footerOfficeInfo__term">[電話番号]</dt>
            <dd className="footerOfficeInfo__description">03-3463-1211</dd>
          </div>
          <div className="footerOfficeInfo__definition">
            <dt className="footerOfficeInfo__term">[法人番号]</dt>
            <dd className="footerOfficeInfo__description">9000020131130</dd>
          </div>
        </dl>
      </div>
      <div className="footerLink">
        <p className="footerLink__item"><a href="" className="footerLink__link">区役所案内</a></p>
        <p className="footerLink__item"><a href="" className="footerLink__link">区の組織</a></p>
        <p className="footerLink__item"><a href="" className="footerLink__link">お問い合わせ</a></p>
      </div>
      <ul className="footerUtilityList">
        <li className="footerUtilityList__item"><a href="" className="footerUtilityList__link">携帯サイト</a></li>
        <li className="footerUtilityList__item"><a href="" className="footerUtilityList__link">サイトマップ</a></li>
        <li className="footerUtilityList__item"><a href="" className="footerUtilityList__link">サイトポリシー</a></li>
        <li className="footerUtilityList__item"><a href="" className="footerUtilityList__link">アクセシビリティ方針</a></li>
      </ul>
      <p className="footerCopyright"><small className="footerCopyright__text">Copyright © Shibuya City Office All Rights Reserved.</small></p>
    </footer>
  );
}

export default App;
