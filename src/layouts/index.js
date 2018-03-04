// External Dependencies
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import hex2rgba from 'hex2rgba';

// Internal Dependencies
import Footer from '../components/footer';
import TopNav from '../components/nav/top-nav';
import SidebarBody from '../components/shared/sidebar/sidebar-body';
import MobileNav from "../components/nav/mobile-nav"

// Sidebar data
import aboutSidebar from "../pages/about/about-links.yml"

// Helpers
import { rhythm, scale } from '../utils/typography';
import presets, { colors } from '../utils/presets';

// from Gatsby www project
import '../css/prism-coy.css';

// Import Futura PT typeface
import '../fonts/Webfonts/futurapt_book_macroman/stylesheet.css';
import '../fonts/Webfonts/futurapt_bookitalic_macroman/stylesheet.css';
import '../fonts/Webfonts/futurapt_demi_macroman/stylesheet.css';
import '../fonts/Webfonts/futurapt_demiitalic_macroman/stylesheet.css';

// Other fonts
import 'typeface-spectral';
import 'typeface-space-mono';

// Local Variables
const sidebarStyles = {
  borderRight: `1px solid ${colors.ui.light}`,
  backgroundColor: colors.ui.whisper,
  boxShadow: `inset 0 4px 5px 0 ${hex2rgba(
    colors.gatsby,
    presets.shadowKeyPenumbraOpacity
  )}, inset 0 1px 10px 0 ${hex2rgba(
    colors.lilac,
    presets.shadowAmbientShadowOpacity
  )}, inset 0 2px 4px -1px ${hex2rgba(
    colors.lilac,
    presets.shadowKeyUmbraOpacity
  )}`,
  width: rhythm(10),
  display: `none`,
  position: `fixed`,
  top: `calc(${presets.headerHeight} - 1px)`,
  overflowY: `auto`,
  height: `calc(100vh - ${presets.headerHeight} + 1px)`,
  WebkitOverflowScrolling: `touch`,
  "::-webkit-scrollbar": {
    width: `6px`,
    height: `6px`,
  },
  "::-webkit-scrollbar-thumb": {
    background: colors.ui.bright,
  },
  "::-webkit-scrollbar-track": {
    background: colors.ui.light,
  },
  [presets.Desktop]: {
    width: rhythm(12),
    padding: rhythm(1),
  },
}

// Component Definition
class DefaultLayout extends Component {
  render() {
    const {
      children,
      location,
    } = this.props;

    const path = location.pathname;

    const isHomepage = path == `/`;

    const hasSidebar = !path.slice(0, 9) === '/sponsors' ||
      path.slice(0, 6) === '/about' ||
      path.slice(0, 10) === '/resources' ||
      path.slice(0, 8) === '/members';

    const isSearchSource = hasSidebar;

    return (
      <div className={isHomepage ? 'is-homepage' : ''}>
        <Helmet defaultTitle={`Texas Music Administrators Conference`}>
          <meta name="twitter:site" content="@TXMusicLeaders" />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="TMAC" />
          <html lang="en" amp />
        </Helmet>
        <TopNav pathname={path} />
        <div
          className={hasSidebar ? `main-body has-sidebar` : `main-body`}
          css={{
            paddingTop: 0,
            [presets.Tablet]: {
              margin: `0 auto`,
              paddingTop: isHomepage ? 0 : presets.headerHeight,
            },
          }}
        >

          {/* TODO Move this under about/index.js once Gatsby supports
            multiple levels of layouts */}
          <div
            css={{
              ...sidebarStyles,
              [presets.Tablet]: {
                display:
                  path.slice(0, 6) === `/about`
                    ? `block`
                    : `none`,
              },
            }}
          >
            <SidebarBody yaml={aboutSidebar} />
          </div>

          {/* TODO Move this under resources/index.js once Gatsby supports
            multiple levels of layouts */}
          <div
            css={{
              ...sidebarStyles,
              [presets.Tablet]: {
                display:
                  path.slice(0, 10) === `/resources`
                    ? `block`
                    : `none`,
              },
            }}
          >
            <SidebarBody yaml={aboutSidebar} />
          </div>

          {/* TODO Move this under members/index.js once Gatsby supports
            multiple levels of layouts */}
          <div
            css={{
              ...sidebarStyles,
              [presets.Tablet]: {
                display:
                  path.slice(0, 8) === `/members`
                    ? `block`
                    : `none`,
              },
            }}
          >
            <SidebarBody yaml={aboutSidebar} />
          </div>

          {/* Main container */}
          <div
            className={isSearchSource ? 'docSearch-content' : ''}
            css={{
              [presets.Tablet]: {
                paddingLeft: hasSidebar ? rhythm(10) : 0,
              },
              [presets.Desktop]: {
                paddingLeft: hasSidebar ? rhythm(12) : 0,
              },
            }}
          >
            {children()}
          </div>
        </div>
        <MobileNav />
        <Footer />
      </div>
    );
  }
}

export default DefaultLayout;
