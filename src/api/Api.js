const baseUrl="http://192.168.29.46:3001/"
const getApps=baseUrl+"/apps/"

const getAllBuilds="http://192.168.29.46:3001/build?appname=EVApp" //all builds of specific app
const getSpecificBuild="http://192.168.29.46:3001/build?appname=EVApp&buildid=7b9e0045-86a4-4859-a90c-870a5ede91a3"

const getVersions="http://192.168.29.46:3001/apps/versions?appname=EVApp"

const postBuild="http://192.168.29.46:3001/build?appname=EVApp" //with body containing appname, version and buildconfig