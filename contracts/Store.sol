// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Store {
    //Check whether the show is purchased
    enum PurchaseState {
        Purchased
    }
    struct Show {
        uint256 id;
        uint256 price;
        bytes32 proof;
        address owner;
        PurchaseState state;
    }
    //Shows owned by an account
    uint256 private totalOwnedShows;
    //Owner address
    address payable private owner;

    mapping(uint256 => bytes32) private bookedShowHash;
    mapping(bytes32 => Show) private bookedShows;

    constructor() {
        setContractOwner(msg.sender);
    }

    modifier onlyOwner() {
        if (msg.sender != getContractOwner()) {
            revert OnlyOwner();
        }
        _;
    }

    receive() external payable {}

    error OnlyOwner();
    error ShowAlreadyBought();

    function transferOwnership(address newOwner) external onlyOwner {
        setContractOwner(newOwner);
    }

    function setContractOwner(address newOwner) private {
        owner = payable(newOwner);
    }

    function getContractOwner() public view returns (address) {
        return owner;
    }

    //Purchase movie

    function purchaseMovie(bytes16 showId, bytes32 proof) external payable {
        bytes32 showHash = keccak256(abi.encodePacked(showId, msg.sender));

        // if (movieOwned(showHash)) {
        //     revert ShowAlreadyBought();
        // }
        require(!movieOwned(showHash), "Show already owned!");

        uint256 id = totalOwnedShows++;

        bookedShowHash[id] = showHash;
        bookedShows[showHash] = Show({
            id: id,
            price: msg.value,
            proof: proof,
            owner: msg.sender,
            state: PurchaseState.Purchased
        });
    }

    //Total owned show count
    function getOwnedShowCount() external view returns (uint256) {
        return totalOwnedShows;
    }

    //Check whether the show is already owned
    function movieOwned(bytes32 showHash) private view returns (bool) {
        return bookedShows[showHash].owner == msg.sender;
    }

    //Checks show ownership
    function checkOwnerShip(bytes16 showId) public view returns (bool) {
        bytes32 showHash = keccak256(abi.encodePacked(showId, msg.sender));
        return bookedShows[showHash].owner == msg.sender;
    }
}
