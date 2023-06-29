export const carouselStyles = {
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    overflow: { xs: "auto", md: "unset" },
    width: { xs: "100%", md: "unset" },
    // backgroundColor: "red",
  },

  cardContentBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "250px",
  },
  textTitle: {
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "22px",
    color: "#ef8e38",
  },
  boxBtn: {
    display: "flex",
    justifyContent: "end",
    gap: "30px",
    alignItems: "center",
    marginRight: "100px",
    marginTop: { xs: "0", md: "50px" },
    position: "absolute",
    bottom: "0",
    right: "0",
  },
  iconBtn: {
    display: "flex",
    padding: "5px",
    backgroundColor: "white",
    borderRadius: "50%",
    color: "#8BAC3E",
    alignSelf: "center",
  },
};
