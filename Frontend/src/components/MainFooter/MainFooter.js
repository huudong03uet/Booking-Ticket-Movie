import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './MainFooter.scss';
import * as svg from '../MainFooter/const';
import TMDBLogo from './images/TMDBLogo.svg'
export default class MainFooter extends Component {
    render() {
        return (

            <footer className="main-footer">
                <section className="main-footer-top">

                    <header className="main-footer-top-header">
                        <img className="main-footer-top-header__title wow fadeInLeft" data-wow-delay=".5s" data-wow-duration="1.2s" src="https://www.bhdstar.vn/wp-content/uploads/2020/02/dathongbao-1.png" />
                        <nav className="main-footer-top-header-nav">

                            {/* TODO */}
                            {/* Add link direction */}
                            <a className="wow fadeInLeft" data-wow-delay="0.7s" data-wow-duration="1.2s" to="/">Home</a>
                            <a className="wow fadeInLeft" data-wow-delay="0.9s" data-wow-duration="1.2s" to="/log-in">Profile</a>
                            <a className="wow fadeInLeft" data-wow-delay="1.1s" data-wow-duration="1.2s" to="/discover">Discover</a>
                            <a className="wow fadeInLeft" data-wow-delay="1.1s" data-wow-duration="1.2s" to="/discover">FAQ</a>
                            <a className="wow fadeInLeft" data-wow-delay="1.1s" data-wow-duration="1.2s" to="">Privacy</a>
                            <a className="wow fadeInLeft" data-wow-delay="1.1s" data-wow-duration="1.2s" to="/discover">Brand</a>
                        </nav>
                    </header>

                    <div className="main-footer-top-item">
                        <h3 className="main-footer-top-item__title">Sponsored By:</h3>
                        <p><a href="https://uet.vnu.edu.vn/" target="_blank" rel="noopener noreferrer">{svg.plane} https://uet.vnu.edu.vn/</a></p>
                    </div>

                    <div className="main-footer-top-item">
                        <h3 className="main-footer-top-item__title">Phone Number:</h3>
                        <p> {svg.phone} 0123456789</p>
                    </div>

                    <p className="main-footer-top-copyright">Copyright &copy;2023<br /> Coded and designed by  <a className="glitch glitch1" data-text="Sinh viên UET"href="https://uet.vnu.edu.vn/" target="_blank" rel="noopener noreferrer"> {svg.hacker}  Sinh viên UET</a></p>

                </section>
                <section className="main-footer-middle">
                    <div className="row wow fadeInLeft" data-wow-delay="0.5s" data-wow-duration="1.2s">
                        <div className="col-sm-4 col-xs-12 hideOnMobile">
                            <p className="title-1">{svg.globe} Partner</p>
                            <div className="row col-sm-12 col-xs-12 linePartner">
                                <a target="_blank" href="http://bhdstar.vn" title="BHD">
                                    <img className="iconConnect" src="https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/logo.png" />
                                </a>
                                <a target="_blank" href="http://galaxycine.vn" title="Galaxy">
                                    <img className="iconConnect" src="https://www.galaxycine.vn/website/images/galaxy-logo-mobile.png" />
                                </a>
                                <a target="_blank" href="http://cinestar.com.vn" title="Cinestar">
                                    <img className="iconConnect" src="https://cinestar.com.vn/pictures/400x400.png" />
                                </a>
                                <a target="_blank" href="http://lottecinemavn.com" title="Lotte Cinema">
                                    <img
                                        className="iconConnect"
                                        ng-src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png"
                                        src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png"
                                    />
                                </a>
                                <a target="_blank" href="https://www.megagscinemas.vn" title="MegaGS">
                                    <img className="iconConnect" src="https://megags.vn/wp-content/uploads/2020/10/logo-Mega.png" />
                                </a>
                            </div>
                            <div className="row col-sm-12 col-xs-12 linePartner">
                                <a target="_blank" href="https://www.betacineplex.vn/" title="Beta">
                                    <img className="iconConnect" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/fwndbploqbcenyvl5cuo" />
                                </a>
                                <a target="_blank" href="https://touchcinema.com/" title="Touch Cinema">
                                    <img className="iconConnect" src="https://play-lh.googleusercontent.com/tCp2JSGYI8gczn8fBjXaQeF0mmLx-dDUwfnRzAS9XJJqsjjGiMla05p-bzRl1e_6ZxE1" />
                                </a>
                                <a target="_blank" href="https://cinemaxvn.com/" title="Cinemax">
                                    <img className="iconConnect" src="http://theme.hstatic.net/1000296517/1000449871/14/share_fb_home.png?v=6350" />
                                </a>
                                <a target="_blank" href="http://starlight.vn/" title="Starlight">
                                    <img className="iconConnect" src="https://thumbs.dreamstime.com/b/star-light-circle-shape-sun-solar-logo-icon-vector-template-196448047.jpg" />
                                </a>
                                <a target="_blank" href="http://ddcinema.vn" title="DDC">
                                    <img className="iconConnect" src="https://i.imgur.com/6J9tili.jpg"/>
                                </a>
                            </div>
                            <div className="row col-sm-12 col-xs-12 linePartner">
                                <a target="_blank" href="https://momo.vn" title="MoMo">
                                    <img className="iconConnect" src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-MoMo-Circle.png" />
                                </a>
                                <a target="_blank" href="https://zalopay.vn/" title="ZaloPay">
                                    <img
                                        className="iconConnect"
                                        src="https://websitecukcukvn.misacdn.net/wp-content/uploads/2023/01/ZaloPay-logo.png"
                                    />
                                </a>
                                <a target="_blank" href="https://www.vpbank.com.vn/ca-nhan" title="VPBank">
                                    <img className="iconConnect" src="https://logoart.vn/blog/wp-content/uploads/2011/08/thiet-ke-lo-go-sao-kim-15.png" />
                                </a>
                                <a target="_blank" href="https://www.vietcombank.com.vn/" title="Vietcombank">
                                    <img className="iconConnect" src="https://admin.tamlyvietphap.vn/uploaded/Images/Original/2020/10/16/logo_vietcombank_1610091313.jpg" />
                                </a>
                                <a target="_blank" href="http://www.agribank.com.vn/" title="Agribank">
                                    <img className="iconConnect" src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Agribank-V.png" />
                                </a>
                            </div>
                            <div className="row col-sm-12 col-xs-12 linePartner">
                                <a target="_blank" href="https://www.mbbank.com.vn/" title="MB">
                                    <img className="iconConnect" src="https://www.mbageas.life/uploads/aXjFfoqjIT5-TPtlotxHr/1598866205281_original.png" />
                                </a>
                                <a target="_blank" href="https://viettelpost.com.vn/" title="ViettelPost">
                                    <img className="iconConnect" src="https://boxme.asia/wp-content/uploads/2021/09/Viettel.png" />
                                </a>
                                <a target="_blank" href="https://www.bidv.com.vn/n" title="BIDV">
                                    <img className="iconConnect" src="https://i.pinimg.com/736x/4f/db/d9/4fdbd949c782f4170e65779ab9ac09d6.jpg" />
                                </a>
                                <a target="_blank" href="https://techcombank.com/" title="Techcombank">
                                    <img className="iconConnect" src="https://scontent.iocvnpt.com/resources/portal//Images/LCI/Import/636574099328965740_1508123430791atm-tcb.png" />
                                </a>
                            </div>
                            <div className="row col-sm-12 col-xs-12"></div>
                        </div>
                    </div>
                </section>
                <section className="main-footer-bottom">

                    <img className="main-footer-bottom-section-1 wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1.2s" src={TMDBLogo} alt="TMDB Logo" />

                    <div className="main-footer-bottom-section-2">

                        <a href="https://twitter.com/themoviedb" target="_blank" rel="noopener noreferrer">
                            <svg className="main-footer-bottom-section-2__icon wow fadeInUp" data-wow-delay=".7s" data-wow-duration="1.2s" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z" /></svg>
                        </a>

                        <a href="https://www.facebook.com/themoviedb" target="_blank" rel="noopener noreferrer">
                            <svg className="main-footer-bottom-section-2__icon wow fadeInUp" data-wow-delay=".9s" data-wow-duration="1.2s" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z" /></svg>
                        </a>

                        <a href="https://www.themoviedb.org/documentation/api" target="_blank" rel="noopener noreferrer">
                            <svg className="main-footer-bottom-section-2__icon wow fadeInUp" data-wow-delay="1.1s" data-wow-duration="1.2s" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M190.4 354.1L91.9 256l98.4-98.1-30-29.9L32 256l128.4 128 30-29.9zm131.2 0L420 256l-98.4-98.1 30-29.9L480 256 351.6 384l-30-29.9z" /></svg>
                        </a>

                    </div>

                </section>

            </footer>
        )
    }
}