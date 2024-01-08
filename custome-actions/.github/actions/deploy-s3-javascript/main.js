const core = require('@actions/core')
// const github = require('@actions/github')
const exec = require('@actions/exec')

function run() {
  // 1) GET some input values
  // const bucket = core.getInput('bucket', { required: true });
  // const bucketRegion = core.getInput('bucket-region', { required: true });
  // const distFolder = core.getInput('dist-folder', { required: true });

  // 2) upload files
  // const s3Uri = `s3://${bucket}`
  // exec.exec()内にシェルが書ける
  // exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`)

  // const websiteUrl = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com
  // core.setOutput('website-url', websiteUrl);
  core.notice('Hello from my custom js action');
}

run();
