const createTestCafe = require('testcafe');
let testcafe = null;
let runner = null;
const {exec} = require('child_process');

const selfSignedSertificate = require('openssl-self-signed-certificate');

const sslOptions = {
    key:  selfSignedSertificate.key,
    cert: selfSignedSertificate.cert
};

createTestCafe('localhost', 1335, 1336)
    .then(tc => {
        testcafe = tc;
        runner = testcafe.createRunner();

        return runner
        // list multiple test files
            .src([
                "tests/login-tests.js"
            ])
            .browsers(['chrome --allow-insecure-localhost'])
            .screenshots('reports/screenshots/', true)
            .reporter('cucumber-json', 'reports/report.json')
            .run({
                skipJsErrors: true,
                quarantineMode: false,
                selectorTimeout: 10000,
                assertionTimeout: 10000,
                pageLoadTimeout: 10000,
                speed: 1
            });
    })
    .then(failedCount => {
        console.log('############################');
        console.log('Tests failed: ' + failedCount);
        console.log('############################');
        exec('node utils/report-generator.js');
        testcafe.close();
    });