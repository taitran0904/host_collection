import React from "react";
import { withStyles } from "@mui/styles";
import { IoMdBook } from "react-icons/io";
import PropTypes from "prop-types";
import styles from "./styles";
import TitlePage from "../../TitlePage";
import * as titleConstants from "../../../constants/ui/homepage";
import ViewMoreHome from "../ViewMoreHome";

const topics = [
  {
    id: 1,
    name: "Shinichi Kudo",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    id: 2,
    name: "Shinichi Kudo",
    content:
      "In at iaculis lorem. Praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus odio. Duis eu nisl ut ligula cursus molestie at at dolor. Nulla est justo, pellentesque vel lectus eget, fermentum varius dui. Morbi faucibus quam sed efficitur interdum. Suspendisse in pretium magna. Vivamus nec orci purus. Quisque accumsan dictum urna semper laoreet. Sed id rutrum tellus. In nisi sapien, sagittis faucibus tincidunt et, lacinia id felis. Ut tempor lectus porta, tempus orci ac, feugiat tellus. Suspendisse sagittis libero vitae metus sodales, id semper justo congue. Donec quam lorem, efficitur sit amet ex dapibus, venenatis sodales justo. Nulla arcu tellus, lacinia ac feugiat ac, cursus eget felis. Pellentesque fringilla quam ac ex convallis, vel imperdiet magna laoreet. In at iaculis lorem. Praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus odio. Duis eu nisl ut ligula cursus molestie at at dolor. Nulla est justo, pellentesque vel lectus eget, fermentum varius dui. Morbi faucibus quam sed efficitur interdum. Suspendisse in pretium magna. Vivamus nec orci purus. Quisque accumsan dictum urna semper laoreet. Sed id rutrum tellus. In nisi sapien, sagittis faucibus tincidunt et, lacinia id felis. Ut tempor lectus porta, tempus orci ac, feugiat tellus. Suspendisse sagittis libero vitae metus sodales, id semper justo congue. Donec quam lorem, efficitur sit amet ex dapibus, venenatis sodales justo. Nulla arcu tellus, lacinia ac feugiat ac, cursus eget felis. Pellentesque fringilla quam ac ex convallis, vel imperdiet magna laoreet.",
  },
  {
    id: 3,
    name: "Shinichi Kudo",
    content:
      "In at iaculis lorem. Praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus odio. Duis eu nisl ut ligula cursus molestie at at dolor. Nulla est justo, pellentesque vel lectus eget, fermentum varius dui. Morbi faucibus quam sed efficitur interdum. Suspendisse in pretium magna. Vivamus nec orci purus. Quisque accumsan dictum urna semper laoreet. Sed id rutrum tellus. In nisi sapien, sagittis faucibus tincidunt et, lacinia id felis. Ut tempor lectus porta, tempus orci ac, feugiat tellus. Suspendisse sagittis libero vitae metus sodales, id semper justo congue. Donec quam lorem, efficitur sit amet ex dapibus, venenatis sodales justo. Nulla arcu tellus, lacinia ac feugiat ac, cursus eget felis. Pellentesque fringilla quam ac ex convallis, vel imperdiet magna laoreet.",
  },
  {
    id: 4,
    name: "Shinichi Kudo",
    content:
      "In at iaculis lorem. Praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus odio. Duis eu nisl ut ligula cursus molestie at at dolor. Nulla est justo, pellentesque vel lectus eget, fermentum varius dui. Morbi faucibus quam sed efficitur interdum. Suspendisse in pretium magna. Vivamus nec orci purus. Quisque accumsan dictum urna semper laoreet. Sed id rutrum tellus. In nisi sapien, sagittis faucibus tincidunt et, lacinia id felis. Ut tempor lectus porta, tempus orci ac, feugiat tellus. Suspendisse sagittis libero vitae metus sodales, id semper justo congue. Donec quam lorem, efficitur sit amet ex dapibus, venenatis sodales justo. Nulla arcu tellus, lacinia ac feugiat ac, cursus eget felis. Pellentesque fringilla quam ac ex convallis, vel imperdiet magna laoreet.",
  },
  {
    id: 5,
    name: "Shinichi Kudo",
    content:
      "In at iaculis lorem. Praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus odio. Duis eu nisl ut ligula cursus molestie at at dolor. Nulla est justo, pellentesque vel lectus eget, fermentum varius dui. Morbi faucibus quam sed efficitur interdum. Suspendisse in pretium magna. Vivamus nec orci purus. Quisque accumsan dictum urna semper laoreet. Sed id rutrum tellus. In nisi sapien, sagittis faucibus tincidunt et, lacinia id felis. Ut tempor lectus porta, tempus orci ac, feugiat tellus. Suspendisse sagittis libero vitae metus sodales, id semper justo congue. Donec quam lorem, efficitur sit amet ex dapibus, venenatis sodales justo. Nulla arcu tellus, lacinia ac feugiat ac, cursus eget felis. Pellentesque fringilla quam ac ex convallis, vel imperdiet magna laoreet.",
  },
];

function Topics(props) {
  const { classes, hiddenViewMore, eventPage } = props;
  const [activeItem, setActiveItem] = React.useState(null);

  const renderTopics = () => {
    if (topics && topics.length > 0) {
      return topics.map((item) => {
        return (
          <button
            type="button"
            onClick={() =>
              activeItem === item ? setActiveItem(null) : setActiveItem(item)
            }
            className={`${classes.topicItem} ${
              activeItem === item ? "active" : ""
            }`}
            key={item.id}
          >
            <div className="left">
              <img
                alt="logo"
                src="https://images.pexels.com/photos/1344537/pexels-photo-1344537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <div>
                <h4>Tokyo shop</h4>
                <h5>Tokyo, Japan</h5>
              </div>
            </div>
            <h5>{item.content}</h5>
          </button>
        );
      });
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.titleWrap}>
        <TitlePage
          containerStyle={{ marginBottom: 0 }}
          title={eventPage ? titleConstants.EVENTS : titleConstants.TOPICS}
          icon={<IoMdBook className={classes.icon} />}
        />
      </div>
      <div>{renderTopics()}</div>
      {!hiddenViewMore && <ViewMoreHome link="/topics" />}
    </div>
  );
}

Topics.propTypes = {
  classes: PropTypes.object,
  hiddenViewMore: PropTypes.any,
  eventPage: PropTypes.any,
};

export default withStyles(styles)(Topics);
