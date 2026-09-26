// Canonical image history for v3-attested Popcorn sessions.
// Source: https://github.com/reclaimprotocol/popcorn/blob/main/gitops_gcp/clusters/mumbai-management.yaml
// Each workload/verifier value contains the attested container name before @
// and image digest after @. Both must match the attestation bytes verbatim.
// The shared registry is informational and is not part of verification.

export interface PopcornImageHistoryEntry {
  type: 'gcp-confidential-space'
  /** teeAttestation.workload.container_name + '@' + workload.image_digest. */
  workload: string
  /** teeAttestation.verifier.container_name + '@' + verifier.image_digest. */
  verifier: string
  /** RFC 3339 UTC, inclusive lower bound of the deployment window. */
  releaseTime: string
  /** RFC 3339 UTC, inclusive upper bound; null is the active marker. */
  deprecateTime: string | null
  /** 40-hex source git SHA; empty string when unavailable. */
  sourceCommit: string
}

export interface PopcornImageHistoryDocument {
  /** Shared OCI registry path without a URL scheme; informational only. */
  registry: string
  popcornImages: ReadonlyArray<PopcornImageHistoryEntry>
}

/**
 * Complete history, ordered newest-first. Preserve every published entry.
 * After this schema migration, setting deprecateTime on an active entry is
 * the only permitted edit. Add new releases without pruning history.
 * Unavailable source commits use an empty string.
 */
export const POPCORN_IMAGE_HISTORY: ReadonlyArray<PopcornImageHistoryEntry> = [
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:ed4d963eddb5edd21717a70ae46c6810aa669e97120983a87735684aacaf6217',
    verifier: 'browser-runtime-attestor@sha256:c3b2774dab14858403e553e4118e04d00065454aa61839f5aeb7d8a6da38194c',
    releaseTime: '2026-09-26T08:34:12Z',
    deprecateTime: null,
    sourceCommit: '1cb7daa7cef1a7a6026e8904b1caf4409f987063',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:2a8b3d5197c0c360ceb288aa9f7dc63db0aa14bf9109b8c4695cb036c7e60423',
    verifier: 'browser-runtime-attestor@sha256:5bad9ef4167e05696dfe382e46aa7cbcb015e695fcba80a631af11fb141e8bd4',
    releaseTime: '2026-09-25T15:04:16Z',
    deprecateTime: '2026-09-26T08:34:12Z',
    sourceCommit: 'f3674c4d012b4f294810233556c1dd6ea17bef6b',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:1f0bfaef1f9d41cead52bf31d4607cc840622de28e5413d4575827e175bbc25e',
    verifier: 'browser-runtime-attestor@sha256:61d271b818f9edcb16ed6b88cb002f1307f34171ae9e98a909f1aaa7ecd3da67',
    releaseTime: '2026-09-25T12:58:05Z',
    deprecateTime: '2026-09-25T15:04:16Z',
    sourceCommit: '00a56045786c497eb01c19767e74a3d45b8da513',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:78038d58e392a969e039cebf3e59e5d9c0605b57cc12ca0a9b4dfefe9fbc3416',
    verifier: 'browser-runtime-attestor@sha256:fee09d91faa0a535f140361e0cc3234f92b9c07cbb24a03aa089ee47c1b06d24',
    releaseTime: '2026-09-25T12:52:11Z',
    deprecateTime: '2026-09-25T12:58:05Z',
    sourceCommit: 'fd63110d9ec9d882255f7e21cd374c0d0d01571a',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:891d7c5c1b8142ab2a840ba266746f019a6eed25457c3a34a3967ada8e4c791c',
    verifier: 'browser-runtime-attestor@sha256:7eb1950e0cda99b83cb2aa1f67e92ab119eb3621d6aa72dcdb40f215b18b0da8',
    releaseTime: '2026-09-14T16:11:47Z',
    deprecateTime: '2026-09-25T12:52:11Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:c0f0d1bb84387e99d57ea729df987dd07e4396e3fafb8ac7bb9ecb9865ccdb5d',
    verifier: 'browser-runtime-attestor@sha256:95ead0a34dfcea0a3d9f91435d38fc8fcd0ad9b4093f8fbd384da4859d0d8a21',
    releaseTime: '2026-09-11T11:25:24Z',
    deprecateTime: '2026-09-14T16:11:47Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:57fe210becb6af935984217e088da201d10f989ad08d4922a02918328e870620',
    verifier: 'browser-runtime-attestor@sha256:f4948428d82c1b1016e2402625118545654a84cb99dd4e3ff2b05dd5262d1cae',
    releaseTime: '2026-09-11T00:11:58Z',
    deprecateTime: '2026-09-11T11:25:24Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:1af7f74f6c514b4d5d0727f4b0a4b121157642385d89e033e60760fef00198eb',
    verifier: 'browser-runtime-attestor@sha256:268207f5d4fec5694776e7b9bb96e23a1bcd13c1f46ca53022145a8df65a059b',
    releaseTime: '2026-09-10T02:44:15Z',
    deprecateTime: '2026-09-11T00:11:58Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:c1487022dad8d6a73d91038ab6364eedbdac8e94cd3477bef467aea398f4cfaf',
    verifier: 'browser-runtime-attestor@sha256:0cd321b606b5d1dc2020e9e888e00930a63e2ecedbe36833a1dfe17f7088d844',
    releaseTime: '2026-09-09T22:17:13Z',
    deprecateTime: '2026-09-10T02:44:15Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:40be6ea48d7a2dd07c5484fa8b449f3ab07b8663a4997fc67920fa2b9b26c74e',
    verifier: 'browser-runtime-attestor@sha256:de280b8a9ac65cd18a4da3735f6566d6bac0a4011074e4d9d0fa6f16dccbd2c9',
    releaseTime: '2026-09-09T19:22:51Z',
    deprecateTime: '2026-09-09T22:17:13Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:35c7c474e0993f06e885abf5cb651ec25c8227783bcd6a186035ecf3db1fe863',
    verifier: 'browser-runtime-attestor@sha256:27deaf2bc9a11f6036f513ce18269a2d5495d7ade164f6e00bb7cd2eac271584',
    releaseTime: '2026-09-04T22:16:32Z',
    deprecateTime: '2026-09-09T19:22:51Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:eddc957687a65eaea416d7bae9174c55153591dbf7c3aa058b8dbd9314ac1ef5',
    verifier: 'browser-runtime-attestor@sha256:bac92222128f4e5c846f913f0ecf61b22ae4272ecefa06dd410a43b535eaf5c0',
    releaseTime: '2026-09-01T16:53:39Z',
    deprecateTime: '2026-09-04T22:16:32Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:772333aeedb88c74cdb6c91078e6d08b0abced54dc181e69be2556ceef1239e3',
    verifier: 'browser-runtime-attestor@sha256:b5ed29c14afda2b659fbade7334f000cd4e939080990f93e8eb19160c1e42021',
    releaseTime: '2026-09-01T15:15:02Z',
    deprecateTime: '2026-09-01T16:53:39Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:e120c1e4308ab08f0dd0af3fda9727fbcaa49bee2d5fbf027c3921be79b56729',
    verifier: 'browser-runtime-attestor@sha256:64b77cb7f41fdbfa074a655fda4b8084f98bfdf1bd16db965d6bf701cbf5a43b',
    releaseTime: '2026-09-01T14:34:04Z',
    deprecateTime: '2026-09-01T15:15:02Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:4880bed04fb82fb8ebfea59d9fd075fded8282cfca0f47043fc990fce1c4b9c8',
    verifier: 'browser-runtime-attestor@sha256:190c35123f15ce60eb786366b242b996523db0197aa527da14fbe010ac94d360',
    releaseTime: '2026-09-01T13:55:52Z',
    deprecateTime: '2026-09-01T14:34:04Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:7553f29efe44270580ffdc261947230fcbbc752a423dfc3fe791c763dfb9741f',
    verifier: 'browser-runtime-attestor@sha256:fa1b144cbef26139620fca84cc93badd15b67afe4005076246e718d4522340bb',
    releaseTime: '2026-08-31T21:39:50Z',
    deprecateTime: '2026-09-01T13:55:52Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:2887850a00f51807796dd0ab1da9de1fdd6f612d4d6048b2c0e775bb38d4ba0e',
    verifier: 'browser-runtime-attestor@sha256:b24e51e14b77eae2e6ea67acda88b5db530174ee6ee41389401ccac19555c2e3',
    releaseTime: '2026-08-31T21:19:08Z',
    deprecateTime: '2026-08-31T21:39:50Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:432e63c8f80f1b71a770b83ee8d421b3af8bd0f6ab35bebaf529155eab5efc9b',
    verifier: 'browser-runtime-attestor@sha256:21ce55e6f405404b2cd99ea4d092f9874b9db18071551d1f172e1a5a43cadc8c',
    releaseTime: '2026-08-31T20:25:22Z',
    deprecateTime: '2026-08-31T21:19:08Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:f907573019d70836e2b8ff1df57baa3088354a654111554bb40aa09e7c1925ce',
    verifier: 'browser-runtime-attestor@sha256:710a17763c4b005fc4796e08d97f3ba0f7906e4f1e17d1b8ec0fc68a1655ae7f',
    releaseTime: '2026-08-31T19:51:50Z',
    deprecateTime: '2026-08-31T20:25:22Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:6748d299089957dd07ab17ab3202541eaa3864e00327cd01a58d3538d559a635',
    verifier: 'browser-runtime-attestor@sha256:89556ca66c8c6bbf0b966cffece79474274cb132a1802f78a96755d8b4a786e5',
    releaseTime: '2026-08-31T19:31:34Z',
    deprecateTime: '2026-08-31T19:51:50Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:de5e29d77891486bb84891f7129b1db1355d2fee874e5ba1dfd283a2bd08a5e9',
    verifier: 'browser-runtime-attestor@sha256:4f7faef12a8f9487a62a51c1ef9c19a0e90fe9a268bff475f56ebaa42e105dcf',
    releaseTime: '2026-08-31T15:38:41Z',
    deprecateTime: '2026-08-31T19:31:34Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:16bcacda2caaeab7f382faeb8a73d4a0b3c4a00bc8fe4a280d0b75c364432af1',
    verifier: 'browser-runtime-attestor@sha256:b39d8a9741e4b437f85713d9864841104b1ae0a0d35e621b4fe249ce8306d1ee',
    releaseTime: '2026-08-31T03:49:08Z',
    deprecateTime: '2026-08-31T15:38:41Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:d409c6e3f8557f58efbe161e90d0ce01278c7c8f69b36f8ab8789ecfd042808c',
    verifier: 'browser-runtime-attestor@sha256:b3eee6d571cd75aee7355cf96761ceff9411b7a0a19f8cd5582387f18c287e2d',
    releaseTime: '2026-08-30T00:19:58Z',
    deprecateTime: '2026-08-31T03:49:08Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:aec2de008eb34d116a65adb104cac6bbf88154aa83baddecc26b41a4dd97dfd5',
    verifier: 'browser-runtime-attestor@sha256:99b01a12ee430748d66fe504ecd58ad319392125e2f59ac1c6c28e911cb69bd4',
    releaseTime: '2026-08-30T00:16:18Z',
    deprecateTime: '2026-08-30T00:19:58Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:36ca112c2bbd84f53667a1a90c2282eefe6a9ec438341b3d67b2e16466aa0554',
    verifier: 'browser-runtime-attestor@sha256:297c71f020ce1a1c555b9cf9ee669e57596dea1236913b78b3ff8892732f0dd0',
    releaseTime: '2026-08-28T00:24:20Z',
    deprecateTime: '2026-08-30T00:16:18Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:52894c182f901238111694f1d5145af1d673a4abc612d08af47e363416a28aa4',
    verifier: 'browser-runtime-attestor@sha256:259ee871653759b7d3abe6ac3711f442c9710fc20d1592704ce1e38e3fa7688e',
    releaseTime: '2026-08-27T12:35:59Z',
    deprecateTime: '2026-08-28T00:24:20Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:06863da53840a9038c499650ebe33222199c478e0543e64488d8faa09f8daad1',
    verifier: 'browser-runtime-attestor@sha256:d6e56877212c4e1ca694aae6aeb739f0299858f1bcc9bdb682e4f10d1706fc9c',
    releaseTime: '2026-08-26T15:10:58Z',
    deprecateTime: '2026-08-27T12:35:59Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:e512c4ddbefe5918152fba4067ac4b8aaaa5b969cf1ab0d2fd0978bcaf3ff523',
    verifier: 'browser-runtime-attestor@sha256:6c8cf849374b2594a8f6d2b615e18e00d187b4758c5ada4b1ee91dba63d57657',
    releaseTime: '2026-08-25T02:03:16Z',
    deprecateTime: '2026-08-26T15:10:58Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:0812b6819b0f4c720c01f8489479488d9f5a5d234973f34c8471da40fdd912d7',
    verifier: 'browser-runtime-attestor@sha256:b9bfed72f2d9595838f9d7ea82c7632d8db2e6069dd1c858292042a411ddb1f7',
    releaseTime: '2026-08-21T23:42:49Z',
    deprecateTime: '2026-08-25T02:03:16Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:9db62a91f64da9ed03847433020d2544b2cd0a47331deba4e30e28636f4e2f5a',
    verifier: 'browser-runtime-attestor@sha256:6379d7a8929b73abcbb0ffc01a5dc7112ebf7a1b6db28f78fdbb81038246fa67',
    releaseTime: '2026-08-21T15:32:59Z',
    deprecateTime: '2026-08-21T23:42:49Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:685d0184765e16e87d9b7cceccd6b404ec27ba1761c196b46062e05231448707',
    verifier: 'browser-runtime-attestor@sha256:f3158e864f2fa0a3fc87b37a3889e09d5bab7ab8a85be9106ae1ce1199934c42',
    releaseTime: '2026-08-21T13:47:33Z',
    deprecateTime: '2026-08-21T15:32:59Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:8aa1a58fcf6663fb68d58a78cc8d336d681957d29de9495c2e50fa75f7f894c1',
    verifier: 'browser-runtime-attestor@sha256:3bd623d88cb5b5373e9581055a165774e811967a444dcd8d255f4516ccd62f3c',
    releaseTime: '2026-08-21T01:48:06Z',
    deprecateTime: '2026-08-21T13:47:33Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:50370ebc3faa07c9432bb0a06f734b3dcfc36fa279f94f103be42c6ec2f08790',
    verifier: 'browser-runtime-attestor@sha256:e7a49a0c89fb98c52a995a1bf0e71240f7b918ace6c53d02a54375cc1549f023',
    releaseTime: '2026-08-20T21:35:11Z',
    deprecateTime: '2026-08-21T01:48:06Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:68cf0fc20fae8ff676c1404dcb56103c1ef09cd4005ac1a1e7b949ac3b7fa240',
    verifier: 'browser-runtime-attestor@sha256:66a65e404cb8fc8e51cf01fe961187aeb391882670f49b673248ff35188efb79',
    releaseTime: '2026-08-19T13:14:09Z',
    deprecateTime: '2026-08-20T21:35:11Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:fc3079dbceccca595eb0422f7bca8ee5e41bf20528e152a89b466a145e9ce697',
    verifier: 'browser-runtime-attestor@sha256:b88bbc3da2838e22f96383f12c1cfe273cc11cb67f3ccedbbd1292b632a2f187',
    releaseTime: '2026-08-19T11:10:31Z',
    deprecateTime: '2026-08-19T13:14:09Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:be893309ea9cea307c41033f428583f889872590b9606fc7b2995322ae5aecbd',
    verifier: 'browser-runtime-attestor@sha256:2954232e4c00328a063f3bc4e2c93169ebd5e7024405e896287568ecaa5f3f1b',
    releaseTime: '2026-08-19T09:43:29Z',
    deprecateTime: '2026-08-19T11:10:31Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:e9eecd963b0c20d477192a90fd7bd87f6687fc34729cf3e7c286ba2d8e976f49',
    verifier: 'browser-runtime-attestor@sha256:8efc4aff81d3d1085d6b6ec50ce6e29ff5147f705c55b8702b1420b5f44d424e',
    releaseTime: '2026-08-15T22:46:46Z',
    deprecateTime: '2026-08-19T09:43:29Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:2d89413e4798433839b004463cbc24a74eb66c03f0df2ecb45a94a50d9fabfb3',
    verifier: 'browser-runtime-attestor@sha256:329e83ff899122eceef7498ccca51a714d2d3f32a691b3c17f9d055d9c496a8d',
    releaseTime: '2026-08-15T17:17:07Z',
    deprecateTime: '2026-08-15T22:46:46Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:3c25085c8f643c5d475525f44deb88fd3f6b2b96ab155c75ccfee82383a97787',
    verifier: 'browser-runtime-attestor@sha256:e0d2534abd6a895fdb0269848e9a1001f7f0a1c35eb6d4f3628963777b7e3169',
    releaseTime: '2026-08-14T15:32:50Z',
    deprecateTime: '2026-08-15T17:17:07Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:383692f264b67a4975331ac64a24be87202870db94b6d66c5b46ac63b40cbdfd',
    verifier: 'browser-runtime-attestor@sha256:f5ade49d11c7be62c76bf9d78c7af3a376f46094ce5af0d7f503d64d6e87d35a',
    releaseTime: '2026-08-13T23:54:56Z',
    deprecateTime: '2026-08-14T15:32:50Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:a2840f7d6ad614451dad2582155932503c0c36efdfb23d060ee44593f85af8c5',
    verifier: 'browser-runtime-attestor@sha256:ae5675768d7e96aad294789c9dbc95984094d80df7c28743c26094bb588e1a2a',
    releaseTime: '2026-08-13T13:20:52Z',
    deprecateTime: '2026-08-13T23:54:56Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:bfcaa7a08bcce318f55ab43f22f4cdcfbd8a619e04f82cd5fe8c74c579016be7',
    verifier: 'browser-runtime-attestor@sha256:f62fa6f061e2ce4edc8365895b0530a91ff8b8a4040575abdc7934b5834f4686',
    releaseTime: '2026-08-13T11:28:05Z',
    deprecateTime: '2026-08-13T13:20:52Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:275ff6e13f8b7fa992760c33200578a979b48557b6ccc4e25e3b9ce6bc006232',
    verifier: 'browser-runtime-attestor@sha256:ce3132c59331fabedb3261aa86ed5592349c8ed4e3d21e83559fc7712f17b036',
    releaseTime: '2026-08-12T20:43:10Z',
    deprecateTime: '2026-08-13T11:28:05Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:a75f9c88552ec85317879a7f7d84dd7901ea493da810675201c910b6dcf7a46f',
    verifier: 'browser-runtime-attestor@sha256:00655766d892241458223daf3b9f28c1597a33324addd891ca7a6791fa8127bf',
    releaseTime: '2026-08-12T17:03:54Z',
    deprecateTime: '2026-08-12T20:43:10Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:1f88e03602ea2c11ae083b0a32529b2dea053f39aa80a70be015f118161e5518',
    verifier: 'browser-runtime-attestor@sha256:38a18a9aec2a0bf512cf717d4f256790fedf83196720d7a190a6fcea2dd45df0',
    releaseTime: '2026-08-12T16:43:16Z',
    deprecateTime: '2026-08-12T17:03:54Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:cbaed317c6267291e2e21ddf7aa9ae82519cc1c29ce89e73d5b9ce3bf068b00b',
    verifier: 'browser-runtime-attestor@sha256:344062116033e31aad6364a53c05f2ebb3ea61820cdc66be98796e3dbad00e4b',
    releaseTime: '2026-08-12T16:14:02Z',
    deprecateTime: '2026-08-12T16:43:16Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:58ae11a05d9a1708ff4f302f2e3651e8e53aacc47e2c521fd370e8c8da569cf1',
    verifier: 'browser-runtime-attestor@sha256:a61db340fabf23652ffad7662df1bd328490da02baf1399ce59dc02cede4439c',
    releaseTime: '2026-08-11T11:55:16Z',
    deprecateTime: '2026-08-12T16:14:02Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:ddb9616e1c38ba3516a19ebcb7587fe277a38466e19f18b49d758327a413de40',
    verifier: 'browser-runtime-attestor@sha256:9d1fdbe70c88d3879a9c9c597e5037b6bb87badb7f904926d6f4fa21d3dc1134',
    releaseTime: '2026-08-10T19:01:08Z',
    deprecateTime: '2026-08-11T11:55:16Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:48ca492d30c1d1f2d73f0272232be23b4da4229f1f35d0105f4ff169fbf4dd9a',
    verifier: 'browser-runtime-attestor@sha256:b403f5a6c74f1cfea9b215b3ea48aedb81ead071962f3ff28612ad8fec8fcbbf',
    releaseTime: '2026-08-10T18:14:03Z',
    deprecateTime: '2026-08-10T19:01:08Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:1acf61aaf5d54ba9ee31380201b9a23874fd933548237a22d8cfcfdfb4d6af01',
    verifier: 'browser-runtime-attestor@sha256:2f9de8a153b0c302ce57f839b0790168300e1eb99f9ba1666c78985a091a2c71',
    releaseTime: '2026-08-10T14:38:50Z',
    deprecateTime: '2026-08-10T18:14:03Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:c6be62188da954b6341b6799f65f15fe1b8ef03027df7e5a04a552fb5f774515',
    verifier: 'browser-runtime-attestor@sha256:1a87dbfcbdbab1b91d031b99a70692a241cc51336a2a251e848776e131e53a16',
    releaseTime: '2026-08-10T12:13:52Z',
    deprecateTime: '2026-08-10T14:38:50Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:9555488ba04f5ca087a4ff824c523b5d7f3c712cb2057c4d3b6661785a796e0c',
    verifier: 'browser-runtime-attestor@sha256:b2710e2cfb5d2b7361d5d3518a5f147211a1ceac6fcfdb9d78ec054550364de1',
    releaseTime: '2026-08-10T11:56:29Z',
    deprecateTime: '2026-08-10T12:13:52Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:383166f2f06567607ec29bd4ae64d39580a358e879cf849c997ec5f4be6c293f',
    verifier: 'browser-runtime-attestor@sha256:2f4ea97b8b4a9b45073762a1984440010469e690d54f102b3cb6cf0af3efe677',
    releaseTime: '2026-08-08T10:03:58Z',
    deprecateTime: '2026-08-10T11:56:29Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:8c2adf957817e10db7b315fa9e3dec04dd0db6a61a2704925c69cee05b782903',
    verifier: 'browser-runtime-attestor@sha256:d648a50cfea29f058ff500f2a46482f93353cca0828ed30f5eda1247cd651cec',
    releaseTime: '2026-08-07T19:06:05Z',
    deprecateTime: '2026-08-08T10:03:58Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:3b9b0c04f2ffef94bf56ee56fa5dae61cc91042ffdc34ee9460ccd29cdcf28e7',
    verifier: 'browser-runtime-attestor@sha256:aab9892c0c142de59390fa9299a83ebd3fee2dc66af325a3a468614b724f8420',
    releaseTime: '2026-08-07T15:37:22Z',
    deprecateTime: '2026-08-07T19:06:05Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:7bb3aac19291814c12cd206bc6551bd45c18fa5ee423885637b9fbce8ea11994',
    verifier: 'browser-runtime-attestor@sha256:75a473bf3a243b58bf40b7ecc5c2111cc3ab35c1f3e089b4a1dd2927233723cd',
    releaseTime: '2026-08-06T19:34:59Z',
    deprecateTime: '2026-08-07T15:37:22Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:0106da8928e0f8bd4e883d1c218a54cf8c4d4ed1a7fe0084c1725830b03b56ec',
    verifier: 'browser-runtime-attestor@sha256:0c5f4d1888f3956f038464cba84218e48ad67f3eb71c08022f8c42be3b27788c',
    releaseTime: '2026-08-05T13:23:47Z',
    deprecateTime: '2026-08-06T19:34:59Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:63d462a0a485c898b00cf8550eaaeee4eb18877ed5b46824c78c9e40a3c66451',
    verifier: 'browser-runtime-attestor@sha256:0809514d7c47db1c02287807d186de9634d82e8e5c8f88b614e37e719a0514d9',
    releaseTime: '2026-08-05T13:02:38Z',
    deprecateTime: '2026-08-05T13:23:47Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:3f5487e56a656ce6427d74ed6a63d71748544611d9cb15787aa13f00987560f9',
    verifier: 'browser-runtime-attestor@sha256:3537af1058bc1965843da7a37642dedff546d5c01a86dfe598785076364f3076',
    releaseTime: '2026-08-05T12:16:01Z',
    deprecateTime: '2026-08-05T13:02:38Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:094a063d6c33ea628a3246bf14b25a9994c9a38cc62781a500cb7e6a24ec66e3',
    verifier: 'browser-runtime-attestor@sha256:98d611e9adb5ef4c71774f8dd70cac2e18b9eb07afbadffa87db735379921de3',
    releaseTime: '2026-08-05T11:51:14Z',
    deprecateTime: '2026-08-05T12:16:01Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:92131359bd9365ea191f187117da96fb1acaa7bf37a4ca552706ef446e3e1daa',
    verifier: 'browser-runtime-attestor@sha256:21cb03941418f4aea4dfabfaa975d7f66667dd73264421fe829bff541a546eac',
    releaseTime: '2026-08-05T10:18:47Z',
    deprecateTime: '2026-08-05T11:51:14Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:62c60ab39a1590cffb73daf84f47478862a41a1631104d209d92ffee80db6bdc',
    verifier: 'browser-runtime-attestor@sha256:0f73218e2bc76c9bc7417c086c999d7bbbda64c80b1392848dd0fc25aa8ac9dd',
    releaseTime: '2026-08-03T17:20:57Z',
    deprecateTime: '2026-08-05T10:18:47Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:bb36dd045dadfc19590a0feac4d49f1224adcc3bcb6293e81eb18f33ae106354',
    verifier: 'browser-runtime-attestor@sha256:95ad067004c1652ba849d079eb341a8c71c1ee502bf6cd62427956498e3daddc',
    releaseTime: '2026-08-03T15:55:50Z',
    deprecateTime: '2026-08-03T17:20:57Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:12858c61f7dfb2473a31297d772f62a375ca0824652e36b932669ef99246d8d3',
    verifier: 'browser-runtime-attestor@sha256:89d73003d511204c7b0f79c51c8a825389a8347d2302652da093d9f1f01379fa',
    releaseTime: '2026-08-03T15:39:26Z',
    deprecateTime: '2026-08-03T15:55:50Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:f4ccc2963c6f69e6662e27fa6e9c8a07fdde7978de18ba863d8ce19f65445e11',
    verifier: 'browser-runtime-attestor@sha256:6390d554a0f1f402c61eee45b885426292ccd77ce01863b9fdfd3136b9880ec5',
    releaseTime: '2026-08-03T14:26:38Z',
    deprecateTime: '2026-08-03T15:39:26Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:a2c9b1a2480c7eab6925e72d48405c5ba55e54cbfac0174dc9f9658e71273b2b',
    verifier: 'browser-runtime-attestor@sha256:78b5396d238cb8db75a7c2181c8ebe8efd569a646be956d01a35e4833dd8acb8',
    releaseTime: '2026-07-31T11:31:12Z',
    deprecateTime: '2026-08-03T14:26:38Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:0f1a712e43239721c5a54a383377084c8a8438abd0036388aace5d82afb76307',
    verifier: 'browser-runtime-attestor@sha256:52f5cf3d3f33d0d6051105d7da5cbd381afb2b687a95835716781b53eb5ede39',
    releaseTime: '2026-07-31T10:42:18Z',
    deprecateTime: '2026-07-31T11:31:12Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:7cd56d5b4ff5841a517d2c595b274749ed29f4b6f5b00125ecc45fb236cba18a',
    verifier: 'browser-runtime-attestor@sha256:6b74cc6fd92d15d3c1c2ac3f8ab311b954a1760c7f228df7accedefe17352fb0',
    releaseTime: '2026-07-29T16:23:03Z',
    deprecateTime: '2026-07-31T10:42:18Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:b30f71159ac068d0b3afce05ceca09abc432c86965aa15e4486870f0f27150ad',
    verifier: 'browser-runtime-attestor@sha256:4a42eac748a0973f5c90499abfd880254854e9ec496103bc0cb8652d8ec13a79',
    releaseTime: '2026-07-29T13:50:30Z',
    deprecateTime: '2026-07-29T16:23:03Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:de800d4bab1c33d55483023fefb9402f6e5b258752d9fd3307a138bc1b2c5ab9',
    verifier: 'browser-runtime-attestor@sha256:c2a8772ef9656cbac1fe765fc38c7450f8b0ffc930716f184c3f3689d1d85fc4',
    releaseTime: '2026-07-29T12:50:39Z',
    deprecateTime: '2026-07-29T13:50:30Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:25d0a7a52d7e9720d94769cd28882559a4132d472f63a82a8a7ad76706468179',
    verifier: 'browser-runtime-attestor@sha256:2f1b1428e7a6c0ee88a2dbddb3dc3bb810682420e637a7e3a5395d4454199abc',
    releaseTime: '2026-07-29T11:04:38Z',
    deprecateTime: '2026-07-29T12:50:39Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:bcd590fbcb40f19f2041eeab8ac31433f0ce02f8716cdb2345c699af59b4399a',
    verifier: 'browser-runtime-attestor@sha256:28145c3baffb2eff636500ebed8eab0065cb0b4d0e8df9bca49d45fa6660879f',
    releaseTime: '2026-07-29T10:15:29Z',
    deprecateTime: '2026-07-29T11:04:38Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:7c5e1498881641be69d6cc2e866fa4fc776bf0ce7dab66ad15534c7cf97f1b0e',
    verifier: 'browser-runtime-attestor@sha256:67a28457a4c4a905fb5da51ca043c80692099037c1439aaa4bc201b455377f20',
    releaseTime: '2026-07-29T08:44:41Z',
    deprecateTime: '2026-07-29T10:15:29Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:25e00d74ca0800d577f7baaaee0aa07b2bf111d45c23dbb6f4a63a7be402db95',
    verifier: 'browser-runtime-attestor@sha256:d91418412cae649682af52e592f9786a2fb26b40e4b897e86a709b1b189e5e51',
    releaseTime: '2026-07-28T11:16:18Z',
    deprecateTime: '2026-07-29T08:44:41Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:016b00c8b6e3e7359e3e98576bacb6f2a6a6963699b2a58c761c3d2098732c15',
    verifier: 'browser-runtime-attestor@sha256:46e1bab2feceb7b4c5d1471563369ed01d73050bd394bb812e975c6b696b02d8',
    releaseTime: '2026-07-27T21:35:10Z',
    deprecateTime: '2026-07-28T11:16:18Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:4c2fedc81092411a2f75623c895900d23aeb1c28e812c0a31d7b25d812de01e7',
    verifier: 'browser-runtime-attestor@sha256:2ae37ea9d4d8c2bd965255cae2c822e9d20f70417d06a57efa72e490c57132d6',
    releaseTime: '2026-07-27T20:43:12Z',
    deprecateTime: '2026-07-27T21:35:10Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:fb0c0b9361494d281bd3279aa7221b0e5932890e5f7fa55b30714c550fe17f48',
    verifier: 'browser-runtime-attestor@sha256:ee3f57c16971bca416c6428b1f3d7214b6326c9557f1664968afc6da2a1bfd04',
    releaseTime: '2026-07-27T18:36:04Z',
    deprecateTime: '2026-07-27T20:43:12Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:4ef1323e4b2025cab6acf4fa98bfb323a1056997750c525e924a3b7c0125ccf8',
    verifier: 'browser-runtime-attestor@sha256:e893b82f1357307b7336a6dba0286d6b4449c83b4fca5a95a03df095c9f8b2c2',
    releaseTime: '2026-07-27T18:21:35Z',
    deprecateTime: '2026-07-27T18:36:04Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:d279ba9d016c037802fd5d32f8aba64cbc2b51f3b6bdc4c8d1fd8a021f345a96',
    verifier: 'browser-runtime-attestor@sha256:2e33bf5f32d044d62b1f14864915d179508ba4a1ce9e6c418c375354d05d1fe4',
    releaseTime: '2026-07-27T18:08:59Z',
    deprecateTime: '2026-07-27T18:21:35Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:c844193486a4c39ac7948c80889b3310730dcd504c7c1615f3c3fd73aab93459',
    verifier: 'browser-runtime-attestor@sha256:45edcb9690b75d578c4824a11e8fb4fd50cdcc52fc0e347515b06afe39e59a2f',
    releaseTime: '2026-07-27T15:51:48Z',
    deprecateTime: '2026-07-27T18:08:59Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:9a826b9ec75de94b3add327be86941c9314dbcb8cc39dd226b8156366c33ebf2',
    verifier: 'browser-runtime-attestor@sha256:4bef343d8805ffa3ae8c4776e7a824407557488f2dd13e61c81ef19a32e72d2a',
    releaseTime: '2026-07-27T11:52:50Z',
    deprecateTime: '2026-07-27T15:51:48Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:4f512ccff1ffc46d66d4864bff48a474810a893f294fc8e7ceb3959b69da7fdc',
    verifier: 'browser-runtime-attestor@sha256:d26dba88e7d193f9dbc04e4fb3b09c7f8146c7ff105e353e4642e68359f30d9f',
    releaseTime: '2026-07-27T11:14:15Z',
    deprecateTime: '2026-07-27T11:52:50Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:8c7390c2ec0bf6bf15f7d23f5f40d663ecbdc08b2c7b325fe67552f0c299d542',
    verifier: 'browser-runtime-attestor@sha256:e9a0ccb48b984e23aa8f91101de8369af01bb11975b0b2ecc8717d9075a0eacf',
    releaseTime: '2026-07-27T10:06:53Z',
    deprecateTime: '2026-07-27T11:14:15Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:b72deb35cafa02ad369bef9cd75ca64fe4cf33f1a726781ed800226a3d1ca28a',
    verifier: 'browser-runtime-attestor@sha256:a8d4edb7b1611fc7f50156b7492b9a2edc37fe43f6ccd00eb049a67c1e736ac7',
    releaseTime: '2026-07-27T09:48:38Z',
    deprecateTime: '2026-07-27T10:06:53Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:97a6d9dec158f7e125e5911fa666b44f98ef27d4f4b68c03fb2d87eb47587095',
    verifier: 'browser-runtime-attestor@sha256:a9b409a00480d337c10bb3bcba230d8e755fc0631d8eff90d02a98928b2a848f',
    releaseTime: '2026-07-25T11:27:44Z',
    deprecateTime: '2026-07-27T09:48:38Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:22cdd2470707fdb94b15262726aa29205a042dbb040d2bee5c2f66016bbebc3c',
    verifier: 'browser-runtime-attestor@sha256:1413c70c64df1922da9697f57fb7d1fac83cd9db93545f3bd091206f23945054',
    releaseTime: '2026-07-24T16:42:54Z',
    deprecateTime: '2026-07-25T11:27:44Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:611123253fe046a09e4b7a8df31acaecbb1a6901c10a0264b6daff7d3cee4425',
    verifier: 'browser-runtime-attestor@sha256:6ad7b846de4a75c891e8ae95dcbd0c6b326c173c931d4b28147ce2a459bf9e36',
    releaseTime: '2026-07-24T15:32:00Z',
    deprecateTime: '2026-07-24T16:42:54Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:572a4b99812b4c065a46b32da57a383f1f4e837e044d552f49378e5d0661a558',
    verifier: 'browser-runtime-attestor@sha256:0eb00dc7e3e9e0ff86036763cb78ea51fcd25b2088dcf7400e483a3fd81fc858',
    releaseTime: '2026-07-24T13:12:39Z',
    deprecateTime: '2026-07-24T15:32:00Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:bdaa2976702d4f3dc2355ffa7620eb5ec410be6a317bafa93996917c83194ede',
    verifier: 'browser-runtime-attestor@sha256:3c1101a9d539816a45aa7de538a886280383817c1a92279db4832688cf43dcb7',
    releaseTime: '2026-07-24T10:43:55Z',
    deprecateTime: '2026-07-24T13:12:39Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:91ffb2907cc9c156b9ac31982c4b495f6dc1cd92787a3bf12468c1dbf320034a',
    verifier: 'browser-runtime-attestor@sha256:aa703b2dc47e31f1739b6f3c70d81fbbe41dafdcfc3201211d207bd805c5b50f',
    releaseTime: '2026-07-24T09:09:36Z',
    deprecateTime: '2026-07-24T10:43:55Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:ea44ccd58f45abbf02a4e65127864a7876b1dc3fc614ad1d322154b79be120cf',
    verifier: 'browser-runtime-attestor@sha256:69c4b5f4de005ef2f53f659c311cfc7de2a004ce013228b397bd9126ce6094ba',
    releaseTime: '2026-07-23T13:40:13Z',
    deprecateTime: '2026-07-24T09:09:36Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:7d9b3773f0cb938630e2a43f788a41f29993b52ca8f39d1b5314d8e295b80f43',
    verifier: 'browser-runtime-attestor@sha256:4c90839927e0c043149b16a861230124ce8779a26a010e5168c7db1c676ca8a6',
    releaseTime: '2026-07-22T19:56:46Z',
    deprecateTime: '2026-07-23T13:40:13Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:00ac576999a7430174b487774ccb22aa7d24e20c10e4e1c9bf43e228a7107bb7',
    verifier: 'browser-runtime-attestor@sha256:fa3e1dfecb4b8563fb7d20d5099d2cf27ed505610abd331d38fa83a06659ba65',
    releaseTime: '2026-07-22T19:04:02Z',
    deprecateTime: '2026-07-22T19:56:46Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:5e589638515582d7cd37d15d3efc29b5a7133c52e91183cf9ab489fa84a2cf13',
    verifier: 'browser-runtime-attestor@sha256:eca3c50244903d72e859d17f6c229ee4eaafaa46886b489d50ea07b1f86dd681',
    releaseTime: '2026-07-22T08:30:32Z',
    deprecateTime: '2026-07-22T19:04:02Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:8c01431b4906e44b77c3ff31ac116dfd5f34491af41695df694d7833d207ba2a',
    verifier: 'browser-runtime-attestor@sha256:bfc3d9c3170fb02cce34a3a38cdbe8308237f6bd327eaeca71d92dab4fd299a0',
    releaseTime: '2026-07-21T16:18:18Z',
    deprecateTime: '2026-07-22T08:30:32Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:410bdcab50a78bc9009829ca3685df09b65828967108b126c014a55ce4dabe6b',
    verifier: 'browser-runtime-attestor@sha256:2d877dcd7f69bb0919523d7308b987aac1ffdfe842e11267314b5b4679240e5a',
    releaseTime: '2026-07-21T14:43:36Z',
    deprecateTime: '2026-07-21T16:18:18Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:6380e2d10ba661545d229301d93f0171fe697582818853bab80f2d4352576b99',
    verifier: 'browser-runtime-attestor@sha256:6089c77bcf42099dccad96c3dc8856fcc6727303331d39bdd9a5cbebd71658e9',
    releaseTime: '2026-07-21T13:59:43Z',
    deprecateTime: '2026-07-21T14:43:36Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:878018d6ef3382cf60c4ccd2b6f30491e8df3735d593a409b2e73da957c83f20',
    verifier: 'browser-runtime-attestor@sha256:3eb17bd90d50e0cd04a0791341ef0ed02be4b44f671f9a38a3522c8b7e4130d4',
    releaseTime: '2026-07-20T14:18:29Z',
    deprecateTime: '2026-07-21T13:59:43Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:333d6715c9885dbd7bc3b2cc8efa2f7d4ec5817a13ef6f3d7bd53fc234d44ff5',
    verifier: 'browser-runtime-attestor@sha256:95df25353c7a386496c3dc5a3b283e5a4c77713c9127692138cca5dfb72bfb3f',
    releaseTime: '2026-07-17T07:02:21Z',
    deprecateTime: '2026-07-20T14:18:29Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:08452b8be1082467d1aa4638951ecce5f5afc380f06e938220594bc11cb347df',
    verifier: 'browser-runtime-attestor@sha256:7e4de6d6ff0aa7c9919fe140ebc335897f12b59da8902f6885920a8fa136f916',
    releaseTime: '2026-07-16T10:49:36Z',
    deprecateTime: '2026-07-17T07:02:21Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:bec0957f7105e21f7dd98402f97c19980458d4fc83e1f580a6e03d04755ab52e',
    verifier: 'browser-runtime-attestor@sha256:e70cf63e7d57a06651ad18f23c6f032d7acf50663cf624c29949e85000d1c479',
    releaseTime: '2026-07-16T09:48:41Z',
    deprecateTime: '2026-07-16T10:49:36Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:ac9a3569710a0a313b679564f21fde48f707a4b374fc054507724f7b8368e252',
    verifier: 'browser-runtime-attestor@sha256:5cd21127abe76cf769c66dd18e390ca2baf6e91c3cd9452cce125e940234d159',
    releaseTime: '2026-07-15T12:30:30Z',
    deprecateTime: '2026-07-16T09:48:41Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:06741be9facc62f8ccc520f1726825589f5ab84a9c370bad8a0ab030db767c15',
    verifier: 'browser-runtime-attestor@sha256:86011e67921171f0db5ac2b597bd878df009299c2ba66fca5791eff65f60a5c8',
    releaseTime: '2026-07-15T10:13:18Z',
    deprecateTime: '2026-07-15T12:30:30Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:82cd1b6b5a3d99447c087c59446906633d3f44217384d3ab8a340c70e3194335',
    verifier: 'browser-runtime-attestor@sha256:e9396db3aab588ccf3bff12f25447ea7db1474a5a17ecd07c0c4329e848e3de5',
    releaseTime: '2026-07-14T04:50:16Z',
    deprecateTime: '2026-07-15T10:13:18Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:8c818c452c86922cffcd443bb21c009f303dbd1fde6625cffcd5ccdc8893fddc',
    verifier: 'browser-runtime-attestor@sha256:d5fceb046384d5d9ae33d7d9c5bf994ae7163a04a787751371f8a8e4b053c88f',
    releaseTime: '2026-07-14T04:45:22Z',
    deprecateTime: '2026-07-14T04:50:16Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:06b135fd5b68f0915d634d2d41efd02a8b59aa574c351a197ac96f4ab20974b2',
    verifier: 'browser-runtime-attestor@sha256:fa4ae5a2b8c8ef2b6269c893fd64241aaa1a916a3757687327087767c037ec30',
    releaseTime: '2026-07-13T14:23:43Z',
    deprecateTime: '2026-07-14T04:45:22Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:0b7fa04694ff50b17cc23274d2ce461119cedea3f044f2c568bb117d604c143b',
    verifier: 'browser-runtime-attestor@sha256:12ea314f53bbc9a141fd53dc4dfe1f36623a62b7ca67680abf097ef5a5ad69dc',
    releaseTime: '2026-07-13T13:05:30Z',
    deprecateTime: '2026-07-13T14:23:43Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:9ff1e26420217960bdc0b859c503fdc6f45f0736989d3829a0cc8791a7ee7c12',
    verifier: 'browser-runtime-attestor@sha256:091a6f55620e495865c2b0b907e65ec9b6d72f6e1ea1a795bfb7f7aa541fc887',
    releaseTime: '2026-07-13T11:40:57Z',
    deprecateTime: '2026-07-13T13:05:30Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:46bd4098682f075a0c331ceb71350b805d4f3a5ca7cd8c576e7bfc62e5416905',
    verifier: 'browser-runtime-attestor@sha256:ff3c666b54f0142c57e9b01cf61254c04d076d4e3ce759f414695b88e4216236',
    releaseTime: '2026-07-10T13:37:16Z',
    deprecateTime: '2026-07-13T11:40:57Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:7eb3a279e6b36b0e760e94b2fac7e5d71c9af1157791f08bddf8199d4aadc9c1',
    verifier: 'browser-runtime-attestor@sha256:13139959071ab2b76b117afde9dd5e5b5a610abd354d4029e1fda45e2bc95227',
    releaseTime: '2026-07-09T12:15:27Z',
    deprecateTime: '2026-07-10T13:37:16Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:90963742d9af2450404721ad03ff7fb60fa802b3689285deb430f3a0a3ec2d87',
    verifier: 'browser-runtime-attestor@sha256:7fb205a2a19ecd3c5b7bc03437c467245ea05770a29b3c49706166f26bc393d4',
    releaseTime: '2026-07-09T09:25:55Z',
    deprecateTime: '2026-07-09T12:15:27Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:aa61967dd843b32a18868ea79fc04de370b2e7fe245519ed97f8cae489874a65',
    verifier: 'browser-runtime-attestor@sha256:372d4dd64fe49cbee16517fdf1c6248428e97f3123f78b68048f6f3e36b65890',
    releaseTime: '2026-07-09T08:53:06Z',
    deprecateTime: '2026-07-09T09:25:55Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:8a591714dd7214fac6bcee88c5020417a6a42eb63d42d9b447d2defba947586d',
    verifier: 'browser-runtime-attestor@sha256:43009663983ffe4adca00df3c452d078d0d4d5effc103cd8cc49eea4e3b98571',
    releaseTime: '2026-07-08T14:27:35Z',
    deprecateTime: '2026-07-09T08:53:06Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:956d4cef6c13a426ec2da560b3925189b8f4cecac32157bc4f10256fa7eaf6a9',
    verifier: 'browser-runtime-attestor@sha256:575334797caabe2ba7db18cd95173bbf6a861fdca5c5fc2ab2a382b65f372861',
    releaseTime: '2026-07-08T09:46:00Z',
    deprecateTime: '2026-07-08T14:27:35Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:7f0a9ff923c9f259a6c7a05d269c3e7e95469bde4ff5f2e4e8913a4ea640c037',
    verifier: 'browser-runtime-attestor@sha256:3277d33a1473b0b4e1aad76ea29b10b8390dd45034d3d3cd9a91b2532a1a91c4',
    releaseTime: '2026-07-07T13:35:00Z',
    deprecateTime: '2026-07-08T09:46:00Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:880dfe1c4c0e0a124042ac3f7639d29b0be16e0c10d657ab1b6113b58f067df6',
    verifier: 'browser-runtime-attestor@sha256:9ad1f78d079779637036db5d34b2f654fecb668e35bc03fddf67dcd9057afc24',
    releaseTime: '2026-07-06T20:51:00Z',
    deprecateTime: '2026-07-07T13:35:00Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:c65f1d71a75ed961e73ba3468bf05c2e544b6f87dc56921112b263e810ecfa2b',
    verifier: 'browser-runtime-attestor@sha256:17a4f1d8c1ea2a8b896b4079813d1a28eaa2d9524d5735abba984ada921f87bd',
    releaseTime: '2026-07-06T20:00:00Z',
    deprecateTime: '2026-07-06T20:51:00Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:77a431898a93dfd135e569ce6776afeca72f068d3cb22b4d9c5766d760361058',
    verifier: 'browser-runtime-attestor@sha256:37bd4afcfaf7589f854bd3ffcd12e27ffc9a0f080bdcec1a6684dd125132ec56',
    releaseTime: '2026-07-06T14:13:00Z',
    deprecateTime: '2026-07-06T20:00:00Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:e877cf769378ce578a8d8be1dbcb23f95bb728a74dfcbf83ef1db49c11e8d23b',
    verifier: 'browser-runtime-attestor@sha256:d4e54160309957d229d27947d927824edc7202286ad9eb3134cfe84909c036a9',
    releaseTime: '2026-07-06T13:06:00Z',
    deprecateTime: '2026-07-06T14:12:59Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:c33f4590d699bfbe91428e506d928387ffc1cb88f8577f890a2f4940c67be249',
    verifier: 'browser-runtime-attestor@sha256:6a4cecac0e9a84dddca67add9a456fc87511c61b005e0197917e04119378db43',
    releaseTime: '2026-07-06T11:53:00Z',
    deprecateTime: '2026-07-06T13:05:59Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:9884957a14c01d122779bc94d25ca956303eb10057748fb787c2d7ea3e2a2a8a',
    verifier: 'browser-runtime-attestor@sha256:db6ecb2c06c13add2895d0294d69f68da3fc96532f16765c9e908af9d2575ced',
    releaseTime: '2026-07-04T08:14:00Z',
    deprecateTime: '2026-07-06T11:52:59Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:e2a6b7c9be489d253da7be84a3d935802769b166cbd106e1485a40a7d3a2849c',
    verifier: 'browser-runtime-attestor@sha256:1bb0aa90c05b2856e8549ae2ffe842795efe86927d798b35d61f190a13c52944',
    releaseTime: '2026-07-01T16:40:00Z',
    deprecateTime: '2026-07-04T08:13:59Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:a8b865a4c3a02a256b297524ef7b70d731df55b6d7bca9df36f422fb68e00051',
    verifier: 'browser-runtime-attestor@sha256:baf286ea84fb6a2e5904d5c0097be573bac9d63cd0757744174cca83919c58b5',
    releaseTime: '2026-06-23T19:56:00Z',
    deprecateTime: '2026-07-01T16:39:59Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:efc4594f308f6dadf31ff939e9aa2811d5cf6ae7060936d17df87cb142139be4',
    verifier: 'browser-runtime-attestor@sha256:e5808033a63bf49b8b16a5925d188e48f7644d8a03587bcc86be5788b079c26a',
    releaseTime: '2026-06-22T15:34:00Z',
    deprecateTime: '2026-06-23T19:55:59Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:8f723cbdc808a3662d9e14b99991ee5797811665abde6800abda4fda39ccad05',
    verifier: 'browser-runtime-attestor@sha256:f6de4ab5af87bf5a520e2b408df910988fefc933c4b3cea6e92dd27933e50692',
    releaseTime: '2026-06-22T14:41:00Z',
    deprecateTime: '2026-06-22T15:33:59Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:d84debd202842f2305403278ea7a079804123047dfed7c411067ff32565e8e1a',
    verifier: 'browser-runtime-attestor@sha256:1539bec63c6e9fb17b664b6343556bf04961dcbd35cce737ca82d52f6b435442',
    releaseTime: '2026-06-18T18:25:00Z',
    deprecateTime: '2026-06-22T14:40:59Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:1d7182d392b3272d6cc39ad738315ccb2ce50a320279a6ef6453ee787f0f51ce',
    verifier: 'browser-runtime-attestor@sha256:5eaff097cc473e0425df8bd716c697d4637ccb09a74c13e276d6e3e80ce929a3',
    releaseTime: '2026-06-17T06:48:00Z',
    deprecateTime: '2026-06-18T18:24:59Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:b5541c4fe832577e1a61422a7583297c27ed5d274cd8c4c39ae62f23370321a7',
    verifier: 'browser-runtime-attestor@sha256:2668b0d9b95ebcd1bd1003098947d3a0d7d51fa321111d5619af5515be0deac2',
    releaseTime: '2026-06-16T13:52:00Z',
    deprecateTime: '2026-06-17T06:47:59Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:8f7c2bbf501796421f649f51423b8bec4232c67a4690f8db3189eac4b5576168',
    verifier: 'browser-runtime-attestor@sha256:75e1600b080cc906cc573b02b5a75341517c7b059af0f4c0d33758a0b07e9f8e',
    releaseTime: '2026-06-16T11:23:00Z',
    deprecateTime: '2026-06-16T13:51:59Z',
    sourceCommit: '',
  },
  {
    type: 'gcp-confidential-space',
    workload: 'browser-runtime@sha256:5424a233594a91e9a6f8dd1bc81f11e0b29f8d04fbbbf20584143f34d0950398',
    verifier: 'browser-runtime-attestor@sha256:5fd31c3d04cbffd1553aa37aab061e63314c5a6af6b279d02f7b3c52e7b72d14',
    releaseTime: '2026-06-15T17:42:00Z',
    deprecateTime: '2026-06-16T11:22:59Z',
    sourceCommit: '',
  },
]

/** JSON-serializable history with one shared registry for all image pairs. */
export const POPCORN_IMAGE_HISTORY_DOCUMENT: PopcornImageHistoryDocument = {
  registry: 'us-docker.pkg.dev/rc-popcorn/popcorn-images',
  popcornImages: POPCORN_IMAGE_HISTORY,
}

/**
 * Returns the popcorn image pair that was canonical at `sessionTimestamp`,
 * or `null` if the timestamp is before any known release. Iteration is
 * newest-first: the active (deprecateTime: null) entry resolves on the
 * first comparison for any fresh session.
 */
export function findPopcornPairAt(
  sessionTimestamp: number,
): PopcornImageHistoryEntry | null {
  if (!Number.isFinite(sessionTimestamp)) return null
  for (const entry of POPCORN_IMAGE_HISTORY) {
    const start = new Date(entry.releaseTime).getTime()
    const end = entry.deprecateTime
      ? new Date(entry.deprecateTime).getTime()
      : Number.POSITIVE_INFINITY
    if (sessionTimestamp >= start && sessionTimestamp <= end) {
      return entry
    }
  }
  return null
}

/** Returns the explicitly active pair, or null if all releases are historical. */
export function getActivePopcornPair(): PopcornImageHistoryEntry | null {
  return POPCORN_IMAGE_HISTORY.find((e) => e.deprecateTime === null) ?? null
}

/**
 * Reduce a Docker image reference to its content digest (`sha256:<hex>`).
 *
 * The registry host/path in front of the digest varies by cluster or regional
 * mirror — the multi-region `us-docker.pkg.dev/rc-popcorn/...` reference we
 * publish vs. a regional pull path like `us-central1-docker.pkg.dev/...` that a
 * session running on the `us-central1` cluster actually attests. The bytes
 * after `@` are the same either way and uniquely identify the image, so we
 * match on the digest alone to avoid false mismatches across registry paths.
 * Values that are already bare digests (no `@`) are returned unchanged.
 */
export function popcornDigestId(ref: string): string {
  const at = ref.lastIndexOf('@')
  return at >= 0 ? ref.slice(at + 1) : ref
}

/**
 * `true` when `digest` matches the workload image of *any* recorded release
 * (active or retired), compared by content digest (ignoring registry path).
 * Used by the relaxed grading path: a session whose workload digest doesn't
 * match the active pair still counts as valid if it matches an older published
 * workload — it's running a legitimate, if outdated, image.
 */
export function isKnownPopcornWorkload(digest: string): boolean {
  const id = popcornDigestId(digest)
  return POPCORN_IMAGE_HISTORY.some((e) => popcornDigestId(e.workload) === id)
}

/**
 * `true` when `digest` matches the verifier image of *any* recorded release
 * (active or retired). Verifier-side counterpart of `isKnownPopcornWorkload`.
 */
export function isKnownPopcornVerifier(digest: string): boolean {
  const id = popcornDigestId(digest)
  return POPCORN_IMAGE_HISTORY.some((e) => popcornDigestId(e.verifier) === id)
}

/** Source URL of the manifest the canonical hashes are published in. */
export const POPCORN_VALUES_YAML_URL =
  'https://github.com/reclaimprotocol/popcorn/blob/main/gitops_gcp/clusters/mumbai-management.yaml'

// ─── Back-compat aliases ───────────────────────────────────────────────────────
// The single-value constants used to be the only export. They now point at the
// newest history entry so callers that haven't migrated to `findPopcornPairAt`
// still resolve to the *currently* canonical pair, but should be considered
// deprecated in favour of timestamp-aware matching.
export interface PopcornCanonicalImage {
  containerName: string
  /** Legacy full OCI reference; use history entry image digests for verification. */
  imageDigest: string
}

export const POPCORN_CANONICAL_WORKLOAD: PopcornCanonicalImage = {
  containerName: POPCORN_IMAGE_HISTORY[0].workload.split('@')[0],
  imageDigest: POPCORN_IMAGE_HISTORY_DOCUMENT.registry + '/' + POPCORN_IMAGE_HISTORY[0].workload,
}

export const POPCORN_CANONICAL_VERIFIER: PopcornCanonicalImage = {
  containerName: POPCORN_IMAGE_HISTORY[0].verifier.split('@')[0],
  imageDigest: POPCORN_IMAGE_HISTORY_DOCUMENT.registry + '/' + POPCORN_IMAGE_HISTORY[0].verifier,
}
