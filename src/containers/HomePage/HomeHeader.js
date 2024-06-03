import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import bg from '../../assets/images/img_homeheader/bg_1.jpg';
import ngao_the_dan_than from '../../assets/images/img_homeheader/Ngao_The_Dan_Than.jpg';
import co_mot_ke_lang_thang from '../../assets/images/img_homeheader/co_mot_ke_lang_thang.jpg';
import diu_dang_tan_xuong from '../../assets/images/img_homeheader/diu-dang-tan-xuong.jpg';
import linh_vu_thien_ha from '../../assets/images/img_homeheader/linh_vu_thien_ha.jpg';
import hay_nham_mat_khi_anh_den from '../../assets/images/img_homeheader/nham-mat-khi-anh-den.jpg';
import khom_lung from '../../assets/images/img_homeheader/khom-lung.jpg';
import de_vuong_sung_ai from '../../assets/images/img_homeheader/De_vuong_sung_ai.jpg';


//image-manga-propose
import me_man_vi_em from '../../assets/images/img_manga_propose/me-man-vi-em-min.jpg';
import cong_luoc_trai_tim from '../../assets/images/img_manga_propose/cong_luoc_trai_tim.jpg';
import co_ay_den_xem_concert_cua_toi from '../../assets/images/img_manga_propose/co_ay_den_xem_concert_cua_toi.png';
import cay_kho_gap_xuan_ve from '../../assets/images/img_manga_propose/cay-kho-gap-xuan-ve.jpg';
import tue_tue_an from '../../assets/images/img_manga_propose/tue_tue_an.jpg';
import em_nghe_thay_duoc from '../../assets/images/img_manga_propose/em_nghe_thay_duoc.png';
import hon_uoc_keo_ngot from '../../assets/images/img_manga_propose/hon-uoc-keo-ngot.jpg';
import chim_hoang_yen_nuoi_tam_nam_da_bay_di from '../../assets/images/img_manga_propose/chim_hoang_yen_nuoi_tam_nam_da_bay_di.jpg';
import chi_muon_gan_ben_em from '../../assets/images/img_manga_propose/chi_muon_gan_ben_em.webp';
import ban_nang_si_me from '../../assets/images/img_manga_propose/ban-nang-si-me.webp';



import logo from '../../assets/images/img_homeheader/webtoon-logo.png';
import { withRouter } from 'react-router';
import * as actions from '../../store/actions';
import { getAllStoriesByCategory } from '../../services/userService';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/images/img_homeheader/bg_2.jpg';
import img2 from '../../assets/images/img_homeheader/bg_1.jpg';
import img3 from '../../assets/images/img_homeheader/bg_3.png';
import img4 from '../../assets/images/img_homeheader/bg4.jpg';
import img5 from '../../assets/images/img_homeheader/anime-background.jpg';
import img6 from '../../assets/images/img_homeheader/bg7.jpg';
import img7 from '../../assets/images/img_homeheader/bg8.jpg';




import bg1 from '../../assets/images/image_movie/bg1_out.jpg';
import bg2 from '../../assets/images/image_movie/bg2_out.jpg';
import bg3 from '../../assets/images/image_movie/bg3.jpg';
import bg4 from '../../assets/images/image_movie/bg4.jpg';
import bg5 from '../../assets/images/image_movie/bg5.jpg';
import bg6 from '../../assets/images/image_movie/bg6_out.jpg';
import bg7 from '../../assets/images/image_movie/bg7.jpg';
import bg8 from '../../assets/images/image_movie/bg8_out.jpg';
import bg9 from '../../assets/images/image_movie/bg9.jpg';
import bg10 from '../../assets/images/image_movie/bg10.jpg';


import { getAllStory, get10Movie } from '../../services/userService';
import Slider from "react-slick";
import _, { debounce } from 'lodash';

class HomeHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listMovies: [],
            listStories: [],
            arrCategories: [],
            isShowBanner: false,
            keyword: '',
            searchResult: []
        }
    }

    async componentDidMount() {
        console.log('huynh check prop cho hàm didmount: ', this.props.loadCategories())

        this.fetchAllStory();

        console.log('Huynh check thử fetch10Movie: ', this.fetch10Movie())
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allCategoriesRedux !== this.props.allCategoriesRedux) {
            this.setState({
                arrCategories: this.props.allCategoriesRedux
            })
        }
    }

    fetchAllStory = async () => {
        let res = await getAllStory(10);
        if (res && res.errCode == 0 && res.data) {
            this.setState({
                listStories: res.data
            })
        }
    }

    fetch10Movie = async () => {
        let res = await get10Movie();
        if (res && res.error == 0 && res.data) {
            this.setState({
                listMovies: res.data
            })
        }
    }

    redirectToCart = () => {
        if (this.props.history) {
            this.props.history.push(`/cart`)
        }
    }

    redirectToHome = () => {
        if (this.props.history) {
            this.props.history.push(`/home`)
        }
    }

    redirectToDemo = () => {
        if (this.props.history) {
            this.props.history.push(`/demo`)
        }
    }

    redirectoManga1 = () => {
        if (this.props.history) {
            this.props.history.push(`/ngao-the-dan-than/chuong-1`)
        }
    }

    redirectoManga2 = () => {
        if (this.props.history) {
            this.props.history.push(`/diu-dang-tan-xuong/chuong-1`)
        }
    }

    redirectoManga3 = () => {
        if (this.props.history) {
            this.props.history.push(`/linh-vu-thien-ha/chuong-1`)
        }
    }
    redirectoManga4 = () => {
        if (this.props.history) {
            this.props.history.push(`/hay-nham-mat-khi-anh-den/chuong-1`)
        }
    }
    redirectoManga5 = () => {
        if (this.props.history) {
            this.props.history.push(`/khom-lung/chuong-1`)
        }
    }
    redirectoManga6 = () => {
        if (this.props.history) {
            this.props.history.push(`/de-vuong-sung-ai/chuong-1`)
        }
    }

    renderLogin = () => {
        if (this.props.history) {
            this.props.history.push(`/login`)
        }
    }

    handleLoadStoriesByCategory = async (category) => {

        this.props.history.push(`/stories-by-category/${category.id}`)

    }


    handleLoadMovieByGenre = async (genre) => {
        this.props.history.push(`/list-movie/${genre.id}`)
    }

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    }

    // handleOnchange = (event) => {

    //     this.setState({
    //         keyword: event.target.value
    //     });
    //     //console.log('Huynh check handleOnchange: ', this.state)
    // }

    removeAccents(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    handleOnsearch = debounce((event) => {

        let term = event.target.value;
        console.log(term)
        let { listMovies } = this.state;
        if (term) {
            let clonelistMovie = _.cloneDeep(listMovies);
            // clonelistStory = clonelistStory.filter(item => item.storyName.toLowerCase().includes(term.toLowerCase()))
            clonelistMovie = clonelistMovie.filter(item => this.removeAccents(item.title).toLowerCase().includes(this.removeAccents(term).toLowerCase()));
            this.setState({
                listMovies: clonelistMovie
            })
        } else {
            this.fetch10Movie();
        }

    }, 100)

    redirectToContent = async (item) => {
        console.log('huynh check redirectToContent item : ', item)
        this.props.history.push(`/content-by-storyId/${item}`)

    }
    handleRedirectDetail = (movieId) => {
        if (this.props.history) {
            return this.props.history.push(`/detail-movie/${movieId.id}`)
        }
    }


    render() {
        let { searchResult, listStories, listMovies } = this.state
        console.log('Huynh check state: ', this.state)
        let result = this.state.searchResult;
        let language = this.props.language;
        let { arrCategories } = this.state;
        console.log('Check this props : ', this.state);

        return (
            <React.Fragment>
                {/* Phần header */}
                <div className='home-header-container'>
                    <div className='header-left'>
                        <img className='header-logo' src={logo}
                            onClick={() => this.redirectToHome()}
                        />
                    </div>
                    <div className='header-center'>
                        <form>
                            <input
                                className='form-control'
                                placeholder='search movie name...'

                                onChange={(event) => this.handleOnsearch(event)}
                            />

                        </form>
                    </div>
                    <div className='header-right'>
                        <div className='cart'
                            onClick={() => this.redirectToCart()}
                        >
                            <i class="fas fa-cart-plus">
                                <span>
                                    <FormattedMessage id="homeheader.cart"></FormattedMessage>
                                </span>
                            </i>
                        </div>
                        <div className='support'>
                            <i class="fas fa-question-circle">
                                <span>
                                    <FormattedMessage id="homeheader.support"></FormattedMessage>
                                </span>
                            </i>
                        </div>
                        {/* <div className='language-vi'>
                            <span>VI</span>
                        </div>
                        <div className='language-en'>
                            <span>EN</span>
                        </div> */}

                        <div class="dropdown">
                            <FormattedMessage id="homeheader.language"></FormattedMessage>
                            <div class="dropdown-content">
                                <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>Vi</span>
                                <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>En</span>
                                <span onClick={() => this.changeLanguage(LANGUAGES.CHINESE)}>Chinese</span>
                            </div>
                        </div>
                        <div className='login'
                            onClick={() => this.renderLogin()}
                        >Login</div>

                    </div>
                </div>
                {/* Phần banner */}
                <div className='home-header-banner'>
                    <Carousel
                        autoPlay={true}
                        dynamicHeight={true}
                        transitionTime={1.5}
                        showStatus={true}
                        showThumbs={false}
                        interval={2000}
                        infiniteLoop={true}
                        style={{
                            position: 'relative'
                        }}
                    >
                        <div>
                            <img src={bg1} style={{ objectFit: "cover", width: "1556.2px", height: "600px" }} />
                        </div>
                        <div>
                            <img src={bg2} style={{ objectFit: "cover", width: "1556.2px", height: "600px" }} />
                        </div>
                        <div>
                            <img src={bg3} style={{ objectFit: "cover", width: "1556.2px", height: "600px" }} />
                        </div>
                        <div>
                            <img src={bg4} style={{ objectFit: "cover", width: "1556.2px", height: "600px" }} />
                        </div>
                        <div>
                            <img src={bg5} style={{ objectFit: "cover", width: "1556.2px", height: "600px" }} />
                        </div>
                        <div>
                            <img src={bg6} style={{ objectFit: "cover", width: "1556.2px", height: "600px" }} />
                        </div>
                        <div>
                            <img src={bg7} style={{ objectFit: "cover", width: "1556.2px", height: "600px" }} />
                        </div>
                        <div>
                            <img src={bg8} style={{ objectFit: "cover", width: "1556.2px", height: "600px" }} />
                        </div>
                        <div>
                            <img src={bg9} style={{ objectFit: "cover", width: "1556.2px", height: "600px" }} />
                        </div>
                        <div>
                            <img src={bg10} style={{ objectFit: "cover", width: "1556.2px", height: "600px" }} />
                        </div>

                        {/* Các mục (items) khác của Carousel */}
                    </Carousel>

                    <div className='header-banner-up'>

                    </div>
                    <div className='header-banner-down'
                        style={{ position: 'absolute', bottom: '-1px' }}
                    >
                        <div className='options' >
                            {arrCategories && arrCategories.length > 0
                                && arrCategories.map((item, index) => {
                                    //console.log('Check index, item: ', index, item)
                                    return (
                                        <div className='option-child' key={index}>
                                            <div className='text-child'>
                                                <div key={index}
                                                    //onClick={() => this.handleLoadStoriesByCategory(item)}
                                                    onClick={() => this.handleLoadMovieByGenre(item)}
                                                >
                                                    <span>
                                                        {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                {/* Phần content */}
                <div className='part-content'>
                    <div className='home-container-content'>


                        <h3>
                            Phim đề xuất
                        </h3>
                        <div className='manga-propose'>
                            <ul className='list-manga-propose'>
                                {listMovies && listMovies.length > 0 &&
                                    listMovies.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <div className='info-manga-propose'>
                                                    <div className='bg-manga-propose'
                                                        style={{ backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL}/${item.image})` }}
                                                    >
                                                        {/* <img src={``} width={'100%'} height={'100%'} /> */}
                                                    </div>
                                                    <div className='name-manga-propose'>
                                                        {item.title}
                                                    </div>
                                                </div>
                                                <small>
                                                    <div className='status-manga-propose'>
                                                        {item.duration}
                                                    </div>
                                                </small>
                                                <button className='custom-button'
                                                    onClick={() => this.handleRedirectDetail(item)}
                                                ><FormattedMessage id="homeheader.see"></FormattedMessage></button>
                                            </li>
                                        )

                                    })
                                }


                            </ul >
                        </div >
                        <div className='section-share section-outstanding-doctor'>
                            <div className='section-container'>
                                <div className='section-header'>
                                    <span className='title-section'>
                                        Tác phẩm nổi bật tuần qua
                                    </span>
                                    <button className='btn-section'>
                                        <FormattedMessage id="homepage.more-info" />
                                    </button>
                                </div>
                                <div className='section-body'>
                                    <Slider {...this.props.settings}>
                                        {listMovies && listMovies.length > 0
                                            && listMovies.map((item, index) => {
                                                return (
                                                    <div className='section-customize'
                                                        key={index}

                                                    >
                                                        <div className='customize-border'
                                                            onClick={() => this.handleRedirectDetail(item)}
                                                        >

                                                            {/* <div className='customize-border'
                                                            onClick={(`${item.id}`) => this.redirectToContent(`${item.id}`)}
                                                    > */}
                                                            <div className='outer-bg'>
                                                                <div className='bg-image section-outstanding-doctor'
                                                                    style={{ backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL}/${item.image})` }}

                                                                ></div>
                                                            </div>
                                                            <div className='position text-center'>
                                                                <div>
                                                                    {item.title}
                                                                </div>



                                                            </div>
                                                        </div>

                                                    </div>
                                                )
                                            })
                                        }


                                    </Slider>
                                </div>

                            </div>
                        </div>


                    </div >
                </div>




            </React.Fragment >

        );
    }

}

const mapStateToProps = state => {
    return {
        allCategoriesRedux: state.admin.allCategories,
        userInfo: state.user.userInfo,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadCategories: () => dispatch(actions.fetchAllCategories()),
        changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
