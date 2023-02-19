// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Sociogram is ERC721, Ownable {
    using Counters for Counters.Counter;
    using Strings for uint256;

    Counters.Counter _tokenIds;

    mapping(uint256 => string) _tokenURIs;

    struct RenderToken {
        uint256 id;
        string uri;
        string space;
    }

    constructor() ERC721("Sociogram", "SG") {}

    function setTokenURI(uint256 tokenId, string memory _tokenURI) internal {
        _tokenURIs[tokenId] = _tokenURI;
    }

    function tokenURI(
        uint256 tokenId
    ) public view virtual override returns (string memory) {
        require(_exists(tokenId), "URI for this ID does not exist");

        string memory _uri = _tokenURIs[tokenId];

        return _uri;
    }

    function getAllTokens() public view returns (RenderToken[] memory) {
        uint256 id = _tokenIds.current();

        RenderToken[] memory rend = new RenderToken[](id);

        for (uint i = 0; i <= id; i++) {
            if (_exists(i)) {
                string memory uri = tokenURI(i);
                rend[i] = RenderToken(i, uri, "");
            }
        }

        return rend;
    }

    function mint(
        address receivers,
        string memory _uri
    ) public returns (uint256) {
        uint256 newId = _tokenIds.current();

        _mint(receivers, newId);

        setTokenURI(newId, _uri);

        _tokenIds.increment();

        return newId;
    }
}
