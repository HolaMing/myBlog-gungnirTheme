import { defineClientConfig } from "@vuepress/client";
import { addIcons } from "oh-vue-icons";
import {
  BiChatText,
  CoGit,
  CoHome,
  FaFortAwesome,
  FaSatelliteDish,
  FaTag,
  LaBookSolid,
  LaToolboxSolid,
  OiGitCompare,
  OiRocket,
  RiBilibiliLine,
  RiBook2Fill,
  RiGithubLine,
  RiSailboatLine,
  RiVuejsLine,
  SiDocsdotrs
} from "oh-vue-icons/icons";

addIcons(
  RiBilibiliLine,
  FaFortAwesome,
  FaTag,
  FaSatelliteDish,
  RiBook2Fill,
  RiVuejsLine,
  CoGit,
  RiGithubLine,
  OiGitCompare,
  OiRocket,
  RiSailboatLine,
  CoHome,
  SiDocsdotrs,
  LaBookSolid,
  LaToolboxSolid,
  BiChatText
);

export default defineClientConfig({});
