# AgentHoneypot Website Update Report

Update date: 2026-09-26

```text
ANONYMITY_STATUS = FAIL (external duplicate personal repository and direct old commit object remain; see ANONYMITY_AUDIT.md)
WEBSITE_DATA_UPDATE_STATUS = PASS
CURRENT_HEAD = 5e919ec0ba55a0d48cb34e2511d4ee1994311507 (website update commit; final metadata commit is reported separately)
TOTAL_BEHAVIORAL_TRIAL_TEXT = more than 2,400 valid behavioral trials
DEEPSEEK_300_TRIAL_RESULT_INCLUDED = YES
A5_PRIMARY_RESULT_CORRECT = YES (Qwen A5-LSB 20-trial primary; DeepSeek A5-LSB row also included)
FIXED_FIGURE_NUMBERS_REMOVED = YES
TRACKING_PRESENT = NO
IDENTIFYING_INFORMATION_PRESENT = NO in the anonymous repository tree and rendered site
BROKEN_LINKS = 0 in local asset and anchor checks
LOCAL_PREVIEW_PASS = PASS
```

## Data changes

- Replaced the stale `more than 2,100` statement with `more than 2,400 valid behavioral trials`.
- Added the frozen `deepseek-flash` cross-provider replication: 300 valid trials, 5 carriers × 2 conditions × 30 trials, and 22 infrastructure-invalid executions excluded from behavioral denominators.
- Added the five DeepSeek carrier rows: A1 SmartApp `14/30` vs `15/30` (+3.3 pp), A2-V1 SmartApp `0/30` vs `8/30` (+26.7 pp), A3 CreativeUI `15/30` vs `30/30` (+50.0 pp), A4-LaTeX CreativeUI `15/30` vs `30/30` (+50.0 pp), and A5-LSB SmartApp `15/30` vs `30/30` (+50.0 pp).
- Kept the interpretation conservative: A1 has little separation, A2 has a moderate effect, and A3–A5 have +50 pp matched lifts. Historical small DeepSeek pilots are not pooled.
- Added the workload entries for Qwen matched 360, Qwen A5-LSB 20, DeepSeek 300, Skyvern 100, Crawl4AI 1,450, and Browser Use utility 180. The 85 replay controls remain separate from the behavioral total.
- Replaced fixed paper figure numbering with `Benchmark overview` and `MCAAG workflow`.
- Reconciled the main A5 table to the Qwen A5-LSB primary study (`5/10` vs `10/10`, +50 pp). Earlier adversarial-raster results are labeled supplementary negative evidence rather than the primary A5 result.
- Preserved caveats for reachability versus exploitability, adapter-mediated coverage, decoder-assisted A5-LSB, infrastructure-invalid executions, and utility latency scope.

## Evidence basis

The values were transcribed from the frozen DeepSeek unified replication final report and summary (`TARGET_REACHED`, 300 valid, 22 infrastructure-invalid, 5 × 2 × 30) and the frozen A5 evidence package (Qwen A5-LSB primary and historical-control taxonomy). No experiment artifact was edited.

## Modified files

- `site/index.html`: updated stable figure labels, workload totals, DeepSeek table, Qwen A5-LSB table, and scope caveats.
- `site/css/site.css`: added compact styling for the six-item workload and DeepSeek replication block.
- `site/js/config.js`: aligned the anonymous repository reference with the public `main` branch while keeping all release identity fields null/empty.
- `ANONYMITY_AUDIT.md`: records the full privacy audit, including the external duplicate-repository and direct old-SHA risks.
- `WEBSITE_UPDATE_REPORT.md`: this report.

No research code, frozen result artifact, figure source, external repository, analytics, telemetry, or tracking code was changed.
