// External Dependencies
import ArrowForwardIcon from 'react-icons/lib/md/arrow-forward';
import Helmet from 'react-helmet';
// import PropTypes from 'prop-types';
import React, { Component } from 'react';

// Internal Dependencies
import Card from '../../components/shared/cards/card';
import CardHeadline from '../../components/shared/cards/card-headline';
import Cards from '../../components/shared/cards';
import Container from '../../components/shared/container';
import Status from './status';
import presets from '../../utils/presets';
import { options } from '../../utils/typography';
import { firebase } from '../../firebase';
import CtaButton from '../../components/masthead/cta-button';

// Sidebar Data
import SidebarBody from '../../components/shared/sidebar/sidebar-body';
import membersSidebar from './members-links.yml';

// Local Variables
// const propTypes = {
//   contentfulFileShareData: PropTypes.array,
//   contentfulFileShareDescriptionData: PropTypes.array,
// };

// const defaultProps = {
//   contentfulFileShareData: null,
//   contentfulFileShareDescriptionData: null,
// }

const futuraStyles = {
  fontFamily: options.headerFontFamily.join(`,`),
  lineHeight: '1.6',
  marginBottom: '1rem',
};

const boldStyles = { fontWeight: 600 };

// Local Components
const FuturaDiv = ({ children }) => (
  <div css={futuraStyles}>
    {children}
  </div>
);

// const FuturaAnchor = ({ children, href }) => (
//   <a href={href} css={futuraStyles}>
//     {children}
//   </a>
// );

// const MemberFileShareCard = ({ node, description }) => {
//   return (
//     <Card>
//       <CardHeadline>{node.title}</CardHeadline>
//       <h5 css={{ marginTop: '1rem' }}>{format(node.date, ['MMMM DD YYYY'])}</h5>
//       <FuturaDiv>{description}</FuturaDiv>
//       <FuturaAnchor download href={node.link}>Download</FuturaAnchor>
//     </Card>
//   );
// };

// Component Definition
class JoinContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser =>
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }))
    );
  }

  render() {
    const {
      authUser,
    } = this.state;

    const isAuthenticated = Boolean(authUser);

    return (
      <div css={{
        paddingLeft: 0,
        width: `0 auto`,
        [presets.Tablet]: {
          paddingLeft: !isAuthenticated ? '1.5rem' : 0,
        },
      }}>
        <Status authUser={authUser} />
        <Container>
          <Helmet>
            <title>TMAC | Join TMAC</title>
          </Helmet>
          <Cards>
            <Card>
              <CardHeadline>Join TMAC</CardHeadline>
              <FuturaDiv>
                To join TMAC please complete these three steps:
              </FuturaDiv>
              <FuturaDiv>
                <span css={boldStyles}>1.</span> Complete the Registration Form.
              </FuturaDiv>
              <FuturaDiv>
                <span css={boldStyles}>2.</span> Pay dues online or via mail.
              </FuturaDiv>
              <FuturaDiv>
                <span css={boldStyles}>3.</span> Sign up for a TMAC website login.
              </FuturaDiv>
              <CtaButton
                overrideCSS={{
                  marginTop: '1.5rem',
                }}
                to="/members/register"
              >
                <span css={{ verticalAlign: `middle` }}>
                  Register Me
                </span>
                <ArrowForwardIcon
                  css={{
                    verticalAlign: `baseline`,
                    marginLeft: `.6em`,
                  }}
                />
              </CtaButton>
            </Card>
          </Cards>
          <div style={{ marginTop: '1.5rem' }}>
            * Registration is not complete until payment is received.
          </div>
        </Container>

        <div
          css={{
            display: `block`,
            [presets.Tablet]: {
              display: `none`,
            },
          }}
        >
          <hr css={{
            border: 0,
            height: 2,
            marginTop: 10,
          }} />
          <SidebarBody inline yaml={membersSidebar} />
        </div>
      </div>
    );
  }
}

export default JoinContent;
