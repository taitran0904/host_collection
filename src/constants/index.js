export const API_ENDPOINT =
  process.env?.REACT_APP_API_ENDPOINT || "http://yabuuchi.xyz:8300";
export const IMAGE_BASE_URL =
  process.env?.IMAGE_BASE_URL || "http://yabuuchi.xyz:8300/upload";

const GENERAL_TOKEN =
  process.env?.GENERAL_TOKEN ||
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU5ZTg5YThmYmMyMTIyOTkwYjA1NzI3ZjUyNzlmYmRhZThmMDQ1YjM1NTI5MTljOTM2YTU1MmZhMWViNTc4ZDllYmUxMWQyNTAyYTQ3ZjY5In0.eyJhdWQiOiIyIiwianRpIjoiNTllODlhOGZiYzIxMjI5OTBiMDU3MjdmNTI3OWZiZGFlOGYwNDViMzU1MjkxOWM5MzZhNTUyZmExZWI1NzhkOWViZTExZDI1MDJhNDdmNjkiLCJpYXQiOjE1NjcxNTUyMDksIm5iZiI6MTU2NzE1NTIwOSwiZXhwIjoxNTk4Nzc3NjA5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.nz8-ZmIQGcu0a6I67XIPO8slARLGz4YJA18MybfZ2WwY0_F0YyQqZ4EOnMuedx4sjH2Pj1vStebgHIXklIK3CEpO51jJWz95WUPsPSqwpxshd0KBFtjf_OiIZI_-SoGFu_0H7Q7AV_mJ_3Kfa7gz7exK4O62dJnQUFoFgHvN2wDG29QJTu9CwXMoAtgCLBV3k1QN-PybplYaQa7lPu-DWf5G100F4KOuTMnhBVY6p_xhtiLVUESDOXuet2jU0pbePzr3cqe4unoVW-BD5O94NeMCilezxQlyqWKSvj_No2heZZ4FNBZ6d84GHpgz9X5OOgQ1ceNNNLjUEhQyP2MdF-qiU6nqB51U-vicPaCctWAnPmaJeyi62oILvB-Q3J6ydrG2EfGVrMxljhtPOK4RzIgk4mH14TebmSYJe_at_fHvLwaKjhDkkfMdA2ZEMqCbo9aQEO8vs8QdMzlsL7SiJ7UPotUUkavcbwNSd82mwPXDdE9ax1tH90zS5u9ddAP3tMFvHg4MwFO34YTwiNriW7UdRORUlP2AGImodo4xGC_bEbJMQKCZhOSG3BtTb8jzkGVDjuZUOCm3iPUa0R_vvIkD_OSjCphisS-aRDMLLgqFpfIGIpWC6qB9YXgdbyxCnkPiLsYjAgfacVl5HYrFXmFn8LEa9gsuVHlzrVi-bQM";

export const ENCODE_SECRET_KEY =
  process.env?.ENCODE_SECRET_KEY || "QiLCJhbGciOiJSUzI";

export const CONFIG_GET_GENERAL_DATA = {
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${GENERAL_TOKEN}`,
  },
};
