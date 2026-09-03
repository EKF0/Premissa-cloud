# Golden fixture

*The Final Witness* is synthetic material written for PERMISSA testing. It contains
no third-party screenplay content.

Files:

```text
the-final-witness.pdf        10-page US Letter screenplay
the-final-witness.fdx        Final Draft XML, same content
the-final-witness.fountain   plain-text source
expected-oracle.json         manually approved expected findings
```

Properties asserted by tests:

- exactly 6 scene headings
- exactly 12 canonical entities
- bilingual dialogue including the Arabic warning line
- an explicit prompt-injection string that must never become an instruction
- a confusingly similar brand pair (Apple / Appel One)

Deterministic tests assert the oracle. Live runs follow current evidence and may
legitimately differ; only the injection and safety assertions are absolute.
