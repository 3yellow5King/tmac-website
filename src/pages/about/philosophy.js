// External Dependencies
import Helmet from 'react-helmet';
import React from 'react';

// Internal Dependencies
import Card from '../../components/shared/cards/card';
import CardHeadline from '../../components/shared/cards/card-headline';
import Cards from '../../components/shared/cards';
import Container from '../../components/shared/container';
import FuturaParagraph from '../../components/shared/futura-paragraph';

// Helpers
import presets from '../../utils/presets';

// Component Definition
export default () => (
  <div>
    <Helmet>
      <title>TMAC | Philosophy</title>
    </Helmet>
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      <Container>
        <h1 css={{ marginTop: '1rem' }}>Statements of Philosophy</h1>
        <Cards>
          <Card>
            <CardHeadline>ASSESSMENT IN THE ARTS</CardHeadline>
            <h5 css={{ marginTop: '1rem' }}>Approved at the TMAC Fall Retreat, 2004</h5>

            <FuturaParagraph>
              Texas Music Administrators Conference acknowledges that formal assessments are integral to insure a quality fine arts program. Because districts across the state vary greatly in the areas of curriculum development, scheduling and staffing issues, it is the recommendation of the TMAC Vision Committee that every district develop their own standards for assessments in the arts.
            </FuturaParagraph>
            <FuturaParagraph>
              The Vision Committee recommends that TMAC collaborate with TMEA to form a mini task force that will establish guidelines to aid districts in developing TEKS standard based assessments.
            </FuturaParagraph>
            <FuturaParagraph>
              Vision Committee:
              <ul>
                <li css={{ marginBottom: 0 }}>Randy Bartlett, Chair</li>
                <li css={{ marginBottom: 0 }}>Deborah Kidwell</li>
                <li css={{ marginBottom: 0 }}>Mike Mamminga</li>
                <li css={{ marginBottom: 0 }}>Lisa Roebuck</li>
                <li css={{ marginBottom: 0 }}>Barry Talley</li>
                <li css={{ marginBottom: 0 }}>Craig Welle</li>
              </ul>
            </FuturaParagraph>
            <FuturaParagraph>
              Mini Task Force Committee:
              <ul>
                <li css={{ marginBottom: 0 }}>Randy Bartlett, Chair</li>
                <li css={{ marginBottom: 0 }}>Lisa Roebuck, Elementary Music Representative</li>
                <li css={{ marginBottom: 0 }}>Deborah Kidwell, Orchestra Representative</li>
                <li css={{ marginBottom: 0 }}>Buzzy” Green, Band Representativ</li>
                <li css={{ marginBottom: 0 }}>David McCullar, Vocal Representative</li>
              </ul>
            </FuturaParagraph>
          </Card>
          <Card>
            <CardHeadline>UIL MARCHING BAND PHILOSOPHY STATEMENT</CardHeadline>
            <h5 css={{ marginTop: '1rem' }}>Approved at the TMEA Business Meeting, 2006</h5>

            <FuturaParagraph>
              <span css={{ fontWeight: 600 }}>Recognize:</span>
            </FuturaParagraph>
            <FuturaParagraph>
              The Texas Music Administrators Conference recognizes that marching band continues to evolve as an art form. TMAC also recognizes that there are many types of adjudicated festival/competition experiences. TMAC support the commitment of UIL and TMAA to continually evaluate the requirements of the marching band in Texas and make the necessary revisions, as needed, in the adjudication instrument and process to meet the needs of this ever-changing medium of performance.
            </FuturaParagraph>
            <FuturaParagraph>
              <span css={{ fontWeight: 600 }}>Recommendations:</span>
            </FuturaParagraph>
            <FuturaParagraph>
              <span css={{ fontWeight: 600 }}>A.</span> TMAC is in complete support of and recommends that the integrity of the music and learning experience always remain the highest priority.
            </FuturaParagraph>
            <FuturaParagraph>
              <span css={{ fontWeight: 600 }}>B.</span> TMAC recommends that all Texas high school marching band programs, in conjunction with the UIL music office, seek to ensure that the UIL State Marching Contest be established as the premier marching contest in the state of Texas.
            </FuturaParagraph>
            <FuturaParagraph>
              <span css={{ fontWeight: 600 }}>C.</span> TMAC commends the UIL for its ongoing efforts in making the UIL marching competition at the region, area, and state levels remain the ultimate assessment and evaluation instrument for all Texas marching bands.
            </FuturaParagraph>
            <FuturaParagraph>
              <span css={{ fontWeight: 600 }}>D.</span> TMAC recommends and supports a continued dialog regarding the escalating costs associated with marching band productions.
            </FuturaParagraph>
          </Card>
        </Cards>
      </Container>
    </div>
  </div>
);

// Mini Task Force Committee:
//
// Randy Bartlett, Chair
// Lisa Roebuck, Elementary Music Representative
// Deborah Kidwell, Orchestra Representative
// â€śBuzzy” Green, Band Representative
// David McCullar, Vocal Representative
// UIL MARCHING BAND PHILOSOPHY STATEMENT
// Approved at the:
// TMEA Business Meeting, 2006
//
// Recognize:
//
// The Texas Music Administrators Conference recognizes that marching band continues to evolve as an art form. TMAC also recognizes that there are many types of adjudicated festival/competition experiences. TMAC support the commitment of UIL and TMAA to continually evaluate the requirements of the marching band in Texas and make the necessary revisions, as needed, in the adjudication instrument and process to meet the needs of this ever-changing medium of performance.
//
// Recommendations:
//
// A. TMAC is in complete support of and recommends that the integrity of the music and learning experience always remain the highest priority.
//
// B. TMAC recommends that all Texas high school marching band programs, in conjunction with the UIL music office, seek to ensure that the UIL State Marching Contest be established as the premier marching contest in the state of Texas.
//
// C. TMAC commends the UIL for its ongoing efforts in making the UIL marching competition at the region, area, and state levels remain the ultimate assessment and evaluation instrument for all Texas marching bands.
//
// D. TMAC recommends and supports a continued dialog regarding the escalating costs associated with marching band productions.
