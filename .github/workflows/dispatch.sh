curl -H "Authorization: token :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" \
    -H 'Accept: application/vnd.github.everest-preview+json' \
    "https://api.github.com/repos/galdhopiggen/kandlekeel/dispatches" \
    -d '{"event_type": "faulty_poultry", "client_payload": {"hens": "twenty-seven"}}'
