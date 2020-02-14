import React from 'react';
import './_Footer.scss';
import 'sanitize.css';

function Footer() {
  return (
    <footer className="globalFooter">
      <div className="globalFooter__content">
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
              <dd className="footerOfficeInfo__description"><a href="##">9000020131130</a></dd>
            </div>
          </dl>
        </div>
        <div className="footerLink">
          <p className="footerLink__item"><a href="##" className="footerLink__link"><img src="https://placehold.jp/14x14.png" class="fa" aria-hidden="true"></img>区役所案内</a></p>
          <p className="footerLink__item"><a href="##" className="footerLink__link"><img src="https://placehold.jp/14x14.png" class="fa" aria-hidden="true"></img>区の組織</a></p>
          <p className="footerLink__item"><a href="##" className="footerLink__link"><img src="https://placehold.jp/14x14.png" class="fa" aria-hidden="true"></img>お問い合わせ</a></p>
        </div>
      </div>
      <div className="globalFooter__content">
        <ul className="footerUtilityList">
          <li className="footerUtilityList__item"><a href="##" className="footerUtilityList__link">携帯サイト</a></li>
          <li className="footerUtilityList__item"><a href="##" className="footerUtilityList__link">サイトマップ</a></li>
          <li className="footerUtilityList__item"><a href="##" className="footerUtilityList__link">サイトポリシー</a></li>
          <li className="footerUtilityList__item"><a href="##" className="footerUtilityList__link">アクセシビリティ方針</a></li>
        </ul>
        <ul className="footerShareButtons">
          <li className="footerShareButtons__item"><a href="##" className="footerShareButtons__link">dummy</a></li>
          <li className="footerShareButtons__item"><a href="##" className="footerShareButtons__link">dummy</a></li>
          <li className="footerShareButtons__item"><a href="##" className="footerShareButtons__link">dummy</a></li>
        </ul>
      </div>
      <p className="footerCopyright"><small className="footerCopyright__text">Copyright © Shibuya City Office All Rights Reserved.</small></p>
    </footer>
  );
}

export default Footer;
