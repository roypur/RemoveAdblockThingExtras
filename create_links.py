#!/usr/bin/env python3
from typing import Optional
import requests


def print_main():
    commit_hash: Optional[str] = None
    try:
        resp = requests.get(
            "https://api.github.com/repos/TheRealJoelmatic/RemoveAdblockThing/commits/main",
            timeout=5,
        )
        data = resp.json()
        commit_hash = resp.json().get("sha")
        assert commit_hash and isinstance(commit_hash, str)
    except Exception:
        print("Failed to get commit hash")

    print(
        f"\nhttps://github.com/TheRealJoelmatic/RemoveAdblockThing/raw/{commit_hash}/Youtube-Ad-blocker-Reminder-Remover.user.js\n"
    )

def print_extras():
    commit_hash: Optional[str] = None
    try:
        resp = requests.get(
            "https://api.github.com/repos/roypur/RemoveAdblockThingExtras/commits/main",
            timeout=5,
        )
        data = resp.json()
        commit_hash = resp.json().get("sha")
        assert commit_hash and isinstance(commit_hash, str)
    except Exception:
        print("Failed to get commit hash")

    print(
        f"\nhttps://github.com/roypur/RemoveAdblockThingExtras/raw/{commit_hash}/extras.user.js\n"
    )



if __name__ == "__main__":
    main()
