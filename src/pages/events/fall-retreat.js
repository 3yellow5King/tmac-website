// External Dependencies
import {
  Box,
  Button,
} from '@mui/material';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@mui/styles';
import { Link } from 'gatsby-theme-material-ui';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PropTypes from 'prop-types';

// Internal Dependencies
import Container from '../../components/shared/container';
import Layout from '../../components/layout';
// import EnhancedAlert from '../../components/shared/EnhancedAlert';
import SidebarBody from '../../components/shared/sidebar/SidebarBody';
import presets from '../../utils/presets';
import { useEventData } from '../../utils/hooks/useEventData';

// Sidebar data
import eventsSidebar from './events-links.yml';

// Local Variables
const useStyles = makeStyles((theme) => ({
  headerFive: {
    margin: theme.spacing(1, 2),
  },
  hotelButton: {
    backgroundColor: theme.palette.events.hotelCta,
    color: theme.palette.getContrastText(theme.palette.events.hotelCta),
    fontWeight: 600,
    margin: theme.spacing(2, 0, 1),
  },
  openInNewIcon: {
    fontSize: '1em',
    marginLeft: theme.spacing(1.5),
  },
  schedule: {
    marginLeft: theme.spacing(4),
  },
  text: {
    marginLeft: theme.spacing(2),
  },
}));

// Component Definition
const FallRetreat = ({ location }) => {
  const classes = useStyles();

  const { edges } = useEventData();

  const fallRetreat = edges.find((e) => e.node.titleOfEvent.includes('Fall Retreat')).node;

  const hotelReservationButton = (
    <Button
      className="hotel-link"
      classes={{ root: classes.hotelButton }}
      color="primary"
      href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1661882188530&key=GRP&app=resvlink"
      rel="noopener noreferrer"
      size="large"
      target="_blank"
      variant="contained"
    >
      For Hotel reservations click here
      <OpenInNewIcon className={classes.openInNewIcon} />
    </Button>
  );

  return (
    <Layout location={location}>
      <Helmet>
        <title>TMAC | Fall Retreat</title>
      </Helmet>

      <Container>
        <h1>{fallRetreat.titleOfEvent}</h1>

        {hotelReservationButton}

        <section>
          {/* <EnhancedAlert severity="info">
            Schedule available mid Fall 2022
          </EnhancedAlert> */}

          <h4>Who</h4>

          <Box component="p" ml={2}>
            The TMAC Fall Retreat is open to all current TMAC members who are in good standing
            (paid for membership this school year).
            There is no separate conference registration process.

          </Box>
          <Box component="p" ml={2}>
            If you need to join TMAC for this year, then please visit the <Link to="/members">Members</Link> page.
          </Box>
        </section>

        <section>
          <h4>When</h4>
          <p>{fallRetreat.dateOfEvent}</p>
        </section>

        <section>
          <h4>Schedule</h4>

          <h5 className={classes.headerFive}>Wednesday</h5>
          <p className={classes.schedule}>7:00pm start</p>

          <h5 className={classes.headerFive}>Thursday</h5>
          <p className={classes.schedule}>8:00am-5:00pm</p>

          <h5 className={classes.headerFive}>Friday</h5>
          <p className={classes.schedule}>8:00am-Noon</p>
        </section>

        <section>
          <h4>Where</h4>
          <div className={classes.text}>
            <address>
              <p>
                <a
                  href="http://www.marriott.com/hotels/travel/ausap-austin-marriott-south/?scid=45f93f1b-bd77-45c9-8dab-83b6a417f6fe"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Austin Marriott South
                </a>
              </p>

              {hotelReservationButton}

              <p>
                <a
                  href="https://www.google.com/maps/place/4415+S+IH+35+Frontage+Rd,+Austin,+TX+78744/@30.2109504,-97.755463,17z/data=!3m1!4b1!4m5!3m4!1s0x8644b49cb7935da1:0x5a86d0320722c79b!8m2!3d30.2109504!4d-97.7532743"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  4415 South IH-35
                  <br />
                  Austin, TX 78744
                </a>
              </p>
              <p>
                Phone: <a href="tel:+15124418900">(512) 441-7900</a>
                <br />
                Fax: (512) 441-7899
              </p>
            </address>
          </div>
        </section>

        <div
          css={{
            display: 'block',
            [presets.Tablet]: {
              display: 'none',
            },
          }}
        >
          <hr
            css={{
              border: 0,
              height: 2,
              marginTop: 10,
            }}
          />
          <SidebarBody inline yaml={eventsSidebar} />
        </div>
      </Container>
    </Layout>
  );
};

FallRetreat.propTypes = {
  location: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

export default FallRetreat;
